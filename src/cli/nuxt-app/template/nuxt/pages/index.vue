<template>
  <div class="page page__main">
    <div class="container">
      <%_ if (isI18N) { _%>
      <section>
        <h1>Локализация</h1>
        {{ $t('Привет') }}

        <button
          v-for="{ code, name } in $i18n.locales"
          :key="name"
          @click="$i18n.setLocale(code)"
        >
          {{ code }}
        </button>
      </section>
      <%_ } _%>

      <%_ if (isComponentSwiper) { _%>
      <section>
        <h1>Слайдер</h1>

        <client-only>
          <swiper :options="swiperOption">
            <swiper-slide>
              <el-image
                src="https://images.wallpaperscraft.ru/image/kot_trava_igrat_153896_1920x1080.jpg"
                fit="cover"
              />
            </swiper-slide>

            <swiper-slide>
              <el-image
                src="https://images.wallpaperscraft.ru/image/kot_trava_igrat_153896_1920x1080.jpg"
                fit="cover"
              />
            </swiper-slide>

            <swiper-slide>
              <el-image
                src="https://images.wallpaperscraft.ru/image/kot_trava_igrat_153896_1920x1080.jpg"
                fit="cover"
              />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </client-only>
      </section>
      <%_ } _%>

      <%_ if (isComponentVideoJS) { _%>
      <section>
        <h1>Видео</h1>

        <VideoPlayer
          src="https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.mp4"
        />
      </section>
      <%_ } _%>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMain',
  <%_ if (isComponentSwiper) { _%>
  data: () => ({
    swiperOption: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
  }),
  <%_ } _%>
}
</script>

<style lang="scss">

</style>
