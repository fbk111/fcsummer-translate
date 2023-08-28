<template>
  <div id="app">
    <div style="width: 400px;height: 300px">
      <f-translate fontSize="20" class="translate" content="文章强调，在党史学习教育中要做到学史明理、学史增信、学史崇德、学史力行，做到学党史、悟思想、办实事、开新局。文章
  指出，明理是增信、崇德、力行的前提。要从党的辉煌成就、艰辛历程、历史经验、优良传统中深刻领悟中国共产党为什么能、马克思主义为什么行、中国特色社会主义为什么好等道理。要深刻领悟坚持
  中国共产党领导的历史必然性，坚定对党的领导的自信。要深刻领悟马克思主义及其中国化创新理论的真理性，增强自觉贯彻落实党的创新理论的坚定性。要深刻领悟中国特色社会主义道路的正确性，坚
  定不移走中国特色社会主义这条唯一正确的道路。">
      </f-translate>
    </div>
  </div>
</template>

<script>

import FTranslate from "@/package/f-translate/index.vue";

export default {
  name: 'App',
  components: {
    FTranslate
  }
}
</script>

<style scoped>
#app {
  width: 300px;
}

.translate {
  font-size: 15px;
  font-family: Bahnschrift, serif;
}
</style>
