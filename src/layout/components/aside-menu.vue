<template>
  <div class="side-menu-box">
    <div :key="side.url" v-for="side in sideList">
      <el-submenu v-if="side.children" :index="side.id">
        <template slot="title">
          <i v-if="side.icon" :class="['iconfont', [side.icon],isCollapse?'showtitle':'']"></i>
          <span class="menu-name" :title="side.title" v-show="!isCollapse">{{ side.title }}</span>
        </template>
        <el-menu-item-group>
          <aside-menu :sideList="side.children"></aside-menu>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item :index="side.url" v-else>
        <i v-if="side.icon" :class="['iconfont', [side.icon] ,isCollapse?'showtitle':'']"></i>
        <img v-else-if="side.img" :src="side.img" class="logoimg" />
        <span class="menu-name" :title="side.title" v-show="!isCollapse">{{ side.title }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideMenu",
  computed: {},
  props: ["sideList", "isCollapse"],
  created() {
   
  }
};
</script>

<style lang="scss">
.logoimg {
  width: 30px;
  height: 30px;
  margin-right: 17px;
  margin-left: -5px;
}

.menu-name {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.side-menu-box {
  .iconfont {
    color: #ffffff !important;
    font-size: 22px !important;
    padding-right: 8px !important;
    z-index: 999999 !important;
    position: relative;
  }
  i.showtitle {
    top: -10px;
    padding-left: 5px;
  }
  //   div:nth-child(2) .showtitle::after {
  //     content: "首页";
  //     position: absolute;
  //     top: 5px;
  //     left: 4px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(3) .showtitle::after {
  //     content: "指标监控";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(4) .showtitle::after {
  //     content: "数据检索";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(5) .showtitle::after {
  //     content: "常项业务";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(6) .showtitle::after {
  //     content: "专题分析";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(7) .showtitle::after {
  //     content: "质量分析";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(8) .showtitle::after {
  //     content: "案件比";
  //     position: absolute;
  //     top: 5px;
  //     left: -3px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(9) .showtitle::after {
  //     content: "全景画像";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(10) .showtitle::after {
  //     content: "纪检监察";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(11) .showtitle::after {
  //     content: "检务督察";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
  //   div:nth-child(12) .showtitle::after {
  //     content: "动态报表";
  //     position: absolute;
  //     top: 5px;
  //     left: -8px;
  //     font-size: 12px;
  //   }
}
</style>