<template>
    <main>
        <div class="header-content">
            <svg-icon name="logo" color="red" />
        </div>
    </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90px;
    background: linear-gradient(#ff3d3c, #fa7574, #fa8f8e);
    .header-content {
        max-width: 900px;
        width: 100%;
    }
    .icon-logo {
        height: 90px;
        width: 90px;
    }
}
</style>
