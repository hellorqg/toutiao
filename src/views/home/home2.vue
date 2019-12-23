<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in list" :key="item">
      <img class="lbt" :src="item" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      //   list: ['../../assets/img/sl.jpg', '../../assets/img/lf.jpg', '../../assets/img/qjf.jpg']
      //   list: ['http://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b21c8701a18b87d608167af6050828381e30fd87.jpg', 'http://file.mumayi.com/forum/201401/16/202014h22z6jt6vpajypd0.jpg', 'http://g.hiphotos.baidu.com/zhidao/pic/item/fd039245d688d43f499c5b3e7f1ed21b0ff43bc1.jpg']
      list: [
        'http://img4.imgtn.bdimg.com/it/u=3831810863,2913291783&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3830604130,3591603406&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=1306658852,885359542&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=582259257,2644631990&fm=11&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lbt{
    width: 100%;
}
</style>
