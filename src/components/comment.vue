<template>
  <div>
    <div>
      <spinner v-if='guodu'></spinner>
      <div v-if='!guodu'>
        <header class="largeCom-header-title">
          <div class="largeCom-back" @click="backLastPage">
            <div></div>
          </div>
          <div class="largeCom-title">长评--{{commentsMsg.subject.title}}</div>
          <div class="largeCom-back"></div>
        </header>
        <section class="largeCom-wrap">
          <div class="largeCom-content" v-for="(item,index) in commentsMsg.reviews">
            <h3>标题：{{item.title}}</h3>
            <div class="largeCom-content-header">
              <img :src="item.author.avatar" :alt="item.author.alt">
              <span>{{item.author.name}}</span>
              <star :score="item.rating.value*2" class="largeCom-star"></star>
              <span>{{item.created_at}}</span>
            </div>
            <div @click="showContent(index)">
              {{item.summary}}
            </div>
            <div @click="showSummary" v-if="commentsMsg.reviews[index].contentShow">
              {{item.content}}
            </div>
            <footer>
              {{item.useful_count}}赞同
              {{item.useless_count}}反对
            </footer>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  import spinner from './spinner/spinner'
  import star from './star/star'
  export default{
    data () {
      return {
        guodu: true,
        commentsMsg: {}
      }
    },
    components: {
      spinner, star
    },
    mounted: function () {
      const _this = this
      this.$http.get('/api/movie/subject/' + this.$route.params.id + '/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b').then(function (res) {
        _this.guodu = false
        _this.commentsMsg = res.data
      })
    },
    methods: {
      showContent: function (ind) {
        // console.log(typeof this.commentsMsg.reviews[ind].contentShow)
        // this.commentsMsg.reviews[ind].contentShow = true
        // console.log(this.commentsMsg.reviews[ind].contentShow)
      },
      backLastPage: function () {
        window.history.go(-1)
      },
      showSummary: function () {
        this.commentsMsg.reviews.summaryShow = !this.commentsMsg.reviews.summaryShow
      }
    }
  }
</script>
<style>
  .largeCom-header-title {
    display: flex;
    height: 50px;
    width: 100%;
    background-color: #e54847;
    padding: 6px;
    box-sizing: border-box;
  }

  .largeCom-back {
    width: 50px;
    position: relative;
    cursor: pointer;
  }

  .largeCom-back > div {
    position: absolute;
    top: 12px;
    left: 12px;
    height: 13px;
    width: 13px;
    border: 2px solid #fff;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
  }

  .largeCom-title {
    flex: 1;
    color: #fff;
    text-align: center;
    line-height: 2;
    font-size: 20px;
    overflow: hidden;
  }

  .largeCom-wrap {
    padding: 10px;
  }

  .largeCom-content {
    margin-bottom: 10px;
  }

  .largeCom-content h3 {
    font-size: 16px;
  }

  .largeCom-content img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-right: 5px;
  }

  .largeCom-content-header {
    display: flex;
  }

  .largeCom-content-header span {
    align-self: center;
  }

  .largeCom-content-header-rating {
    flex: 1;
    margin-left: 10px;
  }

  .largeCom-content footer {
    text-align: right;
  }

  .largeCom-star {
    display: inline-block;
    line-height: 48px;
  }
</style>

