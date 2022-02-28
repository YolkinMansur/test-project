<template>
 <div class="container mx-auto">
        <div class="my-10 flex">
        <input type="text" class="border-gray-500 border text-xl w-11/12 rounded-xl" placeholder="Enter item">
        <p class="sub   rounded-2xl px-8 py-4 bg-blue-500 text-white block w-max cursor-pointer">Отправить</p>
    </div>
    <div class="tasks__clear button-group pull-right flex">
        <button class="button warning small rounded-2xl px-8 py-4 bg-blue-500 text-white block "
                @click="clearCompleted"
        >
          <i class="fa fa-check"></i> Clear Completed
        </button>
        <button class="button alert small rounded-2xl px-8 py-4 bg-red-500 text-white block "
                @click="clearAll"
        >
          <i class="fa fa-trash"></i> Clear All
        </button>
      </div>
    <div class="out">

    </div>

 </div>
</template>