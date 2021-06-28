<template>
  <el-dropdown @command="handleCommand">
    <div class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img class="user-avatar" :src="avatar" alt="" />
      <div class="user-name">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { defineComponent, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  name: "Avatar",
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const avatar = ref("https://picsum.photos/seed/200/128/128");
    const username = ref("我的昵称");

    const handleCommand = (command) => {
      switch (command) {
        case "logout":
          logout();
          break;
        case "github":
          window.open("https://github.com/chuzhixin/vue-admin-beautiful");
          break;
      }
    };

    // const personalCenter=()=> {
    //   router.push("/personalCenter/personalCenter");
    // }

    const logout = () => {
      ElMessageBox.confirm("您确定要退出当前登录用户吗？", "确认退出", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {});
    };

    return {
      avatar,
      username,
      handleCommand,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.avatar-dropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  .user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-name {
    font-size: 14px;
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>
