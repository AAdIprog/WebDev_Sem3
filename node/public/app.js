const form = document.querySelector('#auth-form');
const message = document.querySelector('#message');
const nameField = document.querySelector('#name-field');
const dashboard = document.querySelector('#dashboard');
const tabs = document.querySelectorAll('.tab');
let mode = 'login';

function setMode(nextMode) {
  mode = nextMode;
  const signup = mode === 'signup';
  document.querySelector('#form-title').textContent = signup ? 'Create your account' : 'Sign in to continue';
  document.querySelector('#submit-label').textContent = signup ? 'Create account' : 'Sign in';
  nameField.classList.toggle('hidden', !signup);
  document.querySelector('#name').required = signup;
  document.querySelector('#password').autocomplete = signup ? 'new-password' : 'current-password';
  tabs.forEach((tab) => { const active = tab.dataset.mode === mode; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', active); });
  message.textContent = '';
}

tabs.forEach((tab) => tab.addEventListener('click', () => setMode(tab.dataset.mode)));

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = 'Connecting...';
  const data = Object.fromEntries(new FormData(form));
  if (mode === 'signup') data.role = 'user';
  try {
    const response = await fetch(`/${mode === 'signup' ? 'signUp' : 'login'}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const result = await response.text();
    if (!response.ok) throw new Error(result || 'Something went wrong.');
    if (mode === 'signup') { message.textContent = 'Account created. You can sign in now.'; form.reset(); setMode('login'); return; }
    const login = JSON.parse(result);
    localStorage.setItem('northstar-token', login.token);
    const protectedResponse = await fetch('/api', { headers: { Authorization: login.token } });
    if (!protectedResponse.ok) throw new Error(await protectedResponse.text());
    form.classList.add('hidden'); tabs.forEach((tab) => tab.classList.add('hidden'));
    document.querySelector('.panel-heading').classList.add('hidden');
    dashboard.classList.remove('hidden'); message.textContent = '';
  } catch (error) { message.textContent = error.message; }
});

document.querySelector('#logout').addEventListener('click', () => {
  localStorage.removeItem('northstar-token');
  form.reset(); form.classList.remove('hidden'); tabs.forEach((tab) => tab.classList.remove('hidden'));
  document.querySelector('.panel-heading').classList.remove('hidden'); dashboard.classList.add('hidden'); setMode('login');
});
