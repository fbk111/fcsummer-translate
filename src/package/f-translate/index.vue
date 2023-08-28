<template>
  <div class="list">
    <div v-for="(item,index) in chineseList" :key="index" class="item" :style="{fontSize:fontSize+'px'} ">
        <p :style="{fontSize:fontSize*.8+'px',maxWidth:fontSize}" class="pinyin">{{ pinyinList[index] }}</p>
        <p class="chinese">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import {pinyinUtil} from "@/utils/pinyin_withtone";
export default {
  name:'FTranslate',
  props: ['content','fontSize'],
  created() {
    // console.log(this.content)
    const pinyin = pinyinUtil.getPinyin(this.content, ' ', true)
    this.pinyinStr = pinyin
    this.chineseList = this.content.split('')
    this.pinyinList = this.pinyinStr.split(' ')
    const symbolList=[',','.','、','，','。']
    console.log(this.fontSize)
    const demo=this.pinyinList.map((item,index)=>{
      return symbolList.includes(item)?' ':item
    })
    this.pinyinList=demo
    console.log(this.pinyinList)
  },
  data() {
    return {
      pinyinStr: '',
      chineseList: [],
      pinyinList: [],

    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;

}

.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  margin: 1px 2px;
  text-align: center;

}
.pinyin{
}
.chinese{

}
</style>