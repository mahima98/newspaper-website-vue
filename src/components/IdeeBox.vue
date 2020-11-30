<template>
  <div class="ideeBox">
    <div class="bg-gray-200 p-4 relative">
      <div>
        <img class="object-cover h-60 w-full" src="../assets/images/img1.png" />
      </div>
      <div
        class="absolute px-2 py-1 bg-gray-500 text-white top-0 right-0 text-xs"
      >
        {{ ideevalues.type }}
      </div>
    </div>
    <div class="description py-2 ">
      <div class="text-left text-md leading-6 min-h-md ">
        <router-link
          :to="{
            name: 'Article',
            params: {
              id: ideevalues.id,
              title: ideevalues.title,
              date: ideevalues.date,
              time: ideevalues.time,
              msg: ideevalues.msg,
              description: ideevalues.description,
              img: ideevalues.img,
              author: ideevalues.author,
            },
          }"
          >{{ ideevalues.title }}</router-link
        >
      </div>
      <div class="time">
        <div class="flex text-xss text-gray-300 space-x-2">
          <div class="flex text-center items-center space-x-1">
            <div class="">
              <svg
                width="11"
                height="11"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 1.33331H1.66667C1.29848 1.33331 1 1.63179 1 1.99998V6.66665C1 7.03484 1.29848 7.33331 1.66667 7.33331H6.33333C6.70152 7.33331 7 7.03484 7 6.66665V1.99998C7 1.63179 6.70152 1.33331 6.33333 1.33331Z"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33325 0.666687V2.00002"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66675 0.666687V2.00002"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 3.33331H7"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="max-w-xss truncate">{{ ideevalues.author }}</div>
          </div>
          <div class="flex text-center items-center space-x-1">
            <div class="">
              <svg
                width="11"
                height="11"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 1.33331H1.66667C1.29848 1.33331 1 1.63179 1 1.99998V6.66665C1 7.03484 1.29848 7.33331 1.66667 7.33331H6.33333C6.70152 7.33331 7 7.03484 7 6.66665V1.99998C7 1.63179 6.70152 1.33331 6.33333 1.33331Z"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33325 0.666687V2.00002"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66675 0.666687V2.00002"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 3.33331H7"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>{{ ideevalues.date }}</div>
          </div>
          <div class="flex items-center space-x-1">
            <div class="">
              <svg
                width="11"
                height="11"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00008 7.33335C5.84103 7.33335 7.33342 5.84097 7.33342 4.00002C7.33342 2.15907 5.84103 0.666687 4.00008 0.666687C2.15913 0.666687 0.666748 2.15907 0.666748 4.00002C0.666748 5.84097 2.15913 7.33335 4.00008 7.33335Z"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 2V4L5.33333 4.66667"
                  stroke="gray"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>{{ ideevalues.time }}</div>
          </div>
          <div class="flex items-center space-x-1">
            <div>
              <svg
                width="11"
                height="11"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M7.75 6.5C7.75 6.69891 7.67098 6.88968 7.53033 7.03033C7.38968 7.17098 7.19891 7.25 7 7.25H2.5L1 8.75V2.75C1 2.55109 1.07902 2.36032 1.21967 2.21967C1.36032 2.07902 1.55109 2 1.75 2H7C7.19891 2 7.38968 2.07902 7.53033 2.21967C7.67098 2.36032 7.75 2.55109 7.75 2.75V6.5Z"
                    stroke="gray"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="9" height="9" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ideevalues"],
};
</script>
