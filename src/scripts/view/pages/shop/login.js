import LoginButton from '../../../utils/login-button';

const Login = {
  async render() {
    return `
      <section class="pt-16 pb-8 bg-gray-50">
        <div class="container">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="-m-1.5 p-1.5 flex-col justify-center">
              <img
                class="h-8 w-auto mb-2"
                src="/images/icon-gpn.png"
                alt="Logo GPN"
              />
            </a>
            <p
              class="mb-4 self-center text-2xl whitespace-nowrap font-body font-bold text-gray-900"
            >
              <span
                class="font-script text-4xl text-transparent p-2 bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400"
                >Galeri</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-lightPrimary"
                >Pelajar</span>
              Nusantara
            </p>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Login
                </h1>
                <div class="text-center">
                  <p id="errorLogin" class="text-sm animate-pulse text-red-600"><p>
                </div>
                <form>
                  <div class="space-y-4 md:space-y-6">
                    <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-primary text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="username" required="">
                    </div>
                    <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="********" class="bg-gray-50 border border-primary text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required="">
                    </div>
                    <p class="text-sm text-gray-500">
                      Don't have an account?
                      <a href="#/register" class="text-sm font-medium text-primary hover:underline">
                        Register here
                      </a>
                    </p>
                    <button id="login" type="submit" class="w-full text-white bg-green-500 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const login = document.querySelector('#login');
    login.addEventListener('click', (e) => {
      e.preventDefault();
      LoginButton.init({
        username,
        password,
      });
    });
  },
};

export default Login;
