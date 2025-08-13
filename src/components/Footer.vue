<template>
  <footer class="border-t-1 border-indigo-500">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-4 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8 place-content-center">
        <div class="mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
          <div class="col-span-2 sm:col-span-1 border-r-1 border-indigo-500">
            <p class="text-md text-gray-900 font-bold">Menu</p>
            <ul class="mt-6 space-y-4 text-md">
              <li>
                <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/">
                  <dl class="mt-6 flex gap-4 lg:gap-6">
                    <div class="flex gap-2">
                      <dt><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="goldenrod" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg></dt>
                      <dd> {{ $t('homepage') }}</dd>
                    </div>
                  </dl>

                </router-link>
              </li>

              <li>
                <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/about-me" exact>
                  <dl class="mt-6 flex gap-4 lg:gap-6">
                    <div class="flex gap-2">
                      <dt><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="goldenrod" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg></dt>
                      <dd> {{ $t('about') }}</dd>
                    </div>
                  </dl>
                </router-link>
              </li>

              <li>
                <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/project">
                  <dl class="mt-6 flex gap-4 lg:gap-6">
                    <div class="flex gap-2">
                      <dt><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="goldenrod" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="8" y1="6" x2="21" y2="6"></line>
                          <line x1="8" y1="12" x2="21" y2="12"></line>
                          <line x1="8" y1="18" x2="21" y2="18"></line>
                          <line x1="3" y1="6" x2="3.01" y2="6"></line>
                          <line x1="3" y1="12" x2="3.01" y2="12"></line>
                          <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg></dt>
                      <dd> {{ $t('projects') }}</dd>
                    </div>
                  </dl>
                </router-link>
              </li>

              <li>
                <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/contact">
                  <dl class="mt-6 flex gap-4 lg:gap-6">
                    <div class="flex gap-2">
                      <dt><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="goldenrod" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg></dt>
                      <dd> {{ $t('contact') }}</dd>
                    </div>
                  </dl>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-span-2 sm:col-span-1 border-r-1 border-indigo-500">
            <p class="text-md text-gray-900 font-bold">{{ $t('socialLink') }}</p>
            <ul class="mt-6 space-y-4 text-md">
              <li>
                <a href="https://t.me/nohoneynoworry" target="_blank"
                  class="text-gray-700 transition hover:opacity-75"><img src="@/assets/telegram.svg" width="28"
                    height="28" alt=""></a>
              </li>
              <li>
                <a href="https://github.com/nohoneynoworry" target="_blank"
                  class="text-gray-700 transition hover:opacity-75"> <svg class="size-6" fill="currentColor"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd" />
                  </svg></a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1SAmEnGbBs/" target="_blank"
                  class="text-gray-700 transition hover:opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="#4a90e2">
                    <path
                      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4 7.278V4.5h-2.286c-2.1 0-3.428 1.6-3.428 3.889v1.667H8v2.777h2.286V19.5h2.857v-6.667h2.286L16 10.056h-2.857V8.944c0-1.11.572-1.666 1.714-1.666H16z" />
                  </svg></a>
              </li>
            </ul>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <p class="text-md text-gray-900 font-bold">Helpful Links</p>
            <ul class="mt-6 space-y-4 text-md">
              <li>
                <dl class="mt-6 flex gap-4 lg:gap-6">
                  <div class="flex gap-2">
                    <dt><img src="@/assets/website.png" alt=""></dt>
                    <dd><a href="https://tailwindcss.com/"
                        class="text-gray-700 transition hover:opacity-75">www.tailwindcss.com</a></dd>
                  </div>
                </dl>
              </li>

              <li>
                <dl class="mt-6 flex gap-4 lg:gap-6">
                  <div class="flex gap-2">
                    <dt><img src="@/assets/website.png" alt=""></dt>
                    <dd> <a href="https://www.w3schools.com/"
                        class="text-gray-700 transition hover:opacity-75">www.w3schools.com</a></dd>
                  </div>
                </dl>

              </li>

              <li>
                <dl class="mt-6 flex gap-4 lg:gap-6">
                  <div class="flex gap-2">
                    <dt><img src="@/assets/website.png" alt=""></dt>
                    <dd> <a href="https://www.greatfrontend.com/"
                        class="text-gray-700 transition hover:opacity-75">www.greatfrontend.com</a></dd>
                  </div>
                </dl>

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="my-4 border-t border-indigo-500 py-4">
        <div class="text-center">
          <p class="text-md text-white-500">&copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
