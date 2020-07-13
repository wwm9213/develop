<template>
  <div class="layout">
    <el-container class="wrap">
      <el-aside class="layout-aside" :width="ziding">
        <el-menu
          :default-active="defaultActiveMenu"
          unique-opened
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#004564"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <aside-menu :sideList="navList" :isCollapse="isCollapse"></aside-menu>
        </el-menu>
      </el-aside>
      <el-container class="layout-constant">
        <el-container>
          <el-header class="layout-header-bar">
            <transition name="fade">
              <el-radio-group
                @change="resizeChartsSize"
                v-model="isCollapse"
                style="margin-bottom: 20px;"
              >
                <el-radio-button :label="false" v-show="isCollapse">展开</el-radio-button>
                <el-radio-button :label="true" v-show="!isCollapse">收回</el-radio-button>
              </el-radio-group>
            </transition>

            <div class="current-date">当前时间:{{nowTime}}</div>

            <div class="user-option">
              <el-dropdown @command="handerClick">
                <el-button type="text">
                  {{userInfo}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="info">个人信息</el-dropdown-item>
                  <el-dropdown-item command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-header>
          <el-main id="layoutMain" class="layout-main page-component__scroll">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { navList } from "./constant/index";
import AsideMenu from "./components/aside-menu";

export default {
  components: { AsideMenu },
  data() {
    return {
      isCollapse: false,
      ziding: "250px",
      navList,
      defaultActiveMenu: this.$route.path,
      userInfo: window.localStorage.getItem("userInfo"),
      nowTime: ""
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    resizeChartsSize() {
      if (this.isCollapse) {
        this.ziding = "64px";
      } else {
        this.ziding = "250px";
      }
    },
    handerClick(msg) {
      if (msg == "info") {
        console.log(msg);
      } else {
        window.localStorage.removeItem("userInfo");
        this.$router.push("/login");
      }
    },

    //显示当前时间（年月日时分秒）
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      this.nowTime =
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    }
  },
  mounted() {
    this.nowTimes();
  },
  beforeDestroy() {
    this.clear();
  }
};
</script>

<style lang="scss">
.layout {
  height: 100%;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  .wrap {
    height: 100%;
  }
  .layout-header-bar {
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    .el-radio-group {
      .el-radio-button {
        margin-top: 20px;
        .el-radio-button:first-child .el-radio-button__inner {
          border: none !important;
          box-shadow: none !important;
          border-left: none !important;
        }
        .el-radio-button__inner {
          border: none !important;
          box-shadow: none !important;
          padding: 12px 0px !important;
        }
      }
    }

    .current-date {
      margin-left: 100px;
      font-size: 14px;
    }

    .user-option {
      height: 100%;
      position: absolute;
      right: 20px;
      display: flex;
      align-items: center;

      .el-dropdown {
        span {
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
  .layout-constant {
    .layout-main {
      height: calc(100vh - 120px);
      padding: 20px;
      overflow-x: hidden;
      box-sizing: content-box;
    }
    transition: all 0.3s ease-in-out;
  }
  .layout-aside {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #004564;
    transition: all 0.3s ease-in-out;
    &::-webkit-scrollbar {
      width: 0;
    }
    .logodiv {
      width: 100%;
      height: 57px;
      line-height: 57px;
      text-align: center;
      .head-logo {
        float: left;
        font-weight: bold;
        font-size: 20px;
        .loginjh {
          width: 28px;
          height: 28px;
          vertical-align: middle;
          margin-left: 15px;
        }
      }
      .head-title {
        float: left;
        margin-left: 20px;
        font-size: 24px;
        color: #fffefe;
      }
    }
  }
  .layout-footer-center {
    padding: 20px 0;
    background-color: rgba(0, 69, 100, 1);
    color: #ffffff;
    font-size: 14px;
  }
  .main-content {
    overflow: auto;
    box-sizing: border-box;
    min-height: calc(100% - 50px);
    background-color: #fff;
  }
  .el-menu-item {
    img {
      width: 28px !important;
      height: 28px !important;
    }
    .el-icon-s-check {
      color: #fff;
      font-size: 22px;
    }
    transition: all 0.3s ease-in-out;
  }
  .el-submenu__title {
    .el-icon-arrow-down {
      z-index: 0;
    }
  }
  .el-submenu__title:focus,
  .el-submenu__title:hover {
    background-color: #062f41 !important;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #062f41 !important;
  }
  .el-menu-item-group {
    li.is-active {
      background: #062f41 !important;
    }
  }
  .el-menu-item-group__title {
    display: none !important;
  }
  .el-menu--collapse {
    .el-submenu__title {
      padding-left: 15px !important;
      .iconfont {
        padding-right: 20px !important;
      }
      .el-icon-arrow-right {
        display: none !important;
      }
    }
    .el-menu-item {
      padding-left: 15px !important;
      .iconfont {
        padding-right: 20px !important;
      }
    }
  }
}

//整个过渡中，给她应用的样式
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

//定义组件过渡开始时的状态
//定义离开过渡状态的结束状态
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
 {
  opacity: 0;
}
.el-backtop {
  background-color: #43baca;
  color: #fff;
  &:hover {
    background-color: #18a4b7;
  }
}
</style>