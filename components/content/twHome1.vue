 <template>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h2 class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
        <slot />
      </h2>
      <p class="mb-8 leading-relaxed"><slot name="description" /></p>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <!-- <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> -->
      <slot name="image" />
    </div>
  </div>
</section>
</template>
 
