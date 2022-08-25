<template>
    <main>
        <div class="content">
            <div class="answer">
                <template
                    v-for="(answer, answerIndex) in answerArray"
                    :key="answerIndex"
                >
                    <div v-if="getCheckRepeat(answerIndex)" class="frame">
                        {{ answer }}
                    </div>
                    <div v-else class="frame">?</div>
                </template>
                <button @click="getNonRepetitiveNumber">產生隨機數</button>
            </div>
            <div class="enter">
                <input v-model="enterValue" />
                <button :disabled="enterArray.length !== 4" @click="setResult">
                    送出
                </button>
            </div>
            <div class="result">
                <div v-if="result.a !== 4">
                    結果: A:{{ result.a }},B:{{ result.b }}
                </div>
                <div class="pass" v-else>結果: 恭喜過關!!!!!!!!!!!!</div>
            </div>
            <div>說明: 請輸入四位數號碼,且號碼不得重複</div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import {
    nonRepetitiveNumber,
    emptyNonRepetitiveNumber,
} from '@/tools/randomNumber';
import { compareWith1A2B, compareWithNumberArray } from '@/tools/comparison';
import { numberToArray } from '@/tools/transform';
import { excludeSame } from '@/tools/check';

let answerArray = ref(nonRepetitiveNumber(4));
let checkRepeat = ref([] as number[]);
let enterValue = ref(0);
let enterArray = ref([] as number[]);
let result = ref(Object);

function getNonRepetitiveNumber() {
    emptyNonRepetitiveNumber();
    answerArray.value = nonRepetitiveNumber(4);
}

function getCheckRepeat(index: number) {
    if (checkRepeat.value.indexOf(index) !== -1) {
        return true;
    } else {
        return false;
    }
}

function setResult() {
    result.value = compareWith1A2B(answerArray.value, enterArray.value);
    checkRepeat.value = compareWithNumberArray(
        answerArray.value,
        enterArray.value,
    );
}

watch(enterValue, (newValue) => {
    enterValue.value = Number(newValue);
    enterArray.value = numberToArray(newValue);
});
</script>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        border-style: dotted;
        border-width: 5px;
        border-color: black;
        max-width: 350px;
        width: 100%;
        height: 500px;
        padding: 10px;
    }
}
.answer {
    display: flex;
    justify-content: center;
    align-items: center;
    .frame {
        color: red;
        display: flex;
        border-style: double;
        border-width: 5px;
        border-color: black;
        padding: 10px;
        margin: 0px 3px;
    }
}
.enter {
    margin: 5px;
    width: 100%;
    display: flex;
    input {
        width: 50%;
    }
}
.pass {
    color: red;
}
</style>
