<template>
  <div class="bg-blue-700 text-white">
    <div class="container mx-auto">
      <div class="flex justify-between p-4">
        <div class="logo">
          <img
            class="w-40"
            alt="newspaper logo"
            src="../assets/images/logo.png"
          />
        </div>
        <div class="title-bar">
          <div class="flex py-2 px-4 text-sm">
            <div class="px-3 py-1 border-b-4 border-red-800 font-light">
              Politique
            </div>
            <div class="px-3 py-1 border-b-4 border-blue-500">Societe</div>
            <div class="px-3 py-1 border-b-4 border-yellow-500">Economie</div>
            <div class="px-3 py-1 border-b-4 border-green-500">Regions</div>
            <div class="px-3 py-1 border-b-4 border-blue-500">Idees</div>
            <div class="px-3 py-1 border-b-4 border-orange-500">Sport</div>
            <div class="px-3 py-1 border-b-4 border-blue-300">
              International
            </div>
            <div class="px-3 py-1 border-b-4 border-purple-500">Vous</div>
            <div class="px-3 py-1 border-b-4 border-red-400">Multimedia</div>
            <div class="px-3 py-1 border-b-4 border-white">
              Petites Announce
            </div>
          </div>
        </div>
        <div class="icon-bar">
          <div class="flex text-xs">
            <div class="tv-guide flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-tv"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <div class="text-center w-16">TV Guide</div>
            </div>
            <div class="a-lire flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div class=" w-12">A lire</div>
            </div>
            <div class="kiosk-LSL flex flex-col justify-center items-center">
              <!-- <img class="w-8" src="../assets/images/kiosk.png" /> -->
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-tv"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <div class="w-16">Kiosk LSL</div>
            </div>
            <div class="search flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div class=" w-12">Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
