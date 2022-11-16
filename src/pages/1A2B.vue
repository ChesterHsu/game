<template>
  <main>
    <div class="game-item">
      <div class="title"></div>
      <div class="content">
        <!-- 將隨機數顯示到框框中 -->
        <div class="answer-item">
          <template v-for="(answer, index) in answerArray">
            <div v-if="getCheckRepeat(index)" class="answer">{{ answer }}</div>
            <div v-else class="answer">?</div>
          </template>
        </div>
        <button @click="refreshAnswer">刷新</button>
        <div class="result">
          <div class="result-title">輸入答案：</div>
          <template v-for="(answer, index) in answerArray">
            <div class="result-answer">{{ resultNumber[index] }}</div>
          </template>
        </div>
        <div class="numeric-keyboard">
          <template v-for="(keyboard) in numericKeyboardList">
            <div class="keyboard" @click="keyboardAction(keyboard)">{{ keyboard }}</div>
          </template>
        </div>
        <div class="beyond">
          <div class="beyond-title">溫馨提示：</div>
          <div class="beyond-message">{{ promptMessage.message }}</div>
        </div>
      </div>
      <div class="illustrate"></div>
      <div class="submit-result">
        <button class="submit-button" @click="setResult">送出</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  nonRepetitiveNumber,
  emptyNonRepetitiveNumber
} from '@/tools/randomNumber'
import { compareWith1A2B, compareWithNumberArray } from '@/tools/comparison'


let answerArray = ref(nonRepetitiveNumber(4)); // 初始化給值
const numericKeyboardList = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', 'c', '0', 'x'] as String[]); // 數字鍵盤的值
const resultNumber = ref([] as number[]); // 輸入結果答案
const checkResult = ref(new Set()); // 檢核輸入結果
let checkRepeat = ref([] as number[]) // 送出結果
const promptMessage = ref(
    {
      type: '', // 提示型別顏色區分 general: 綠色, warning: 黃色, error: 紅色
      message: '',
    }
); // 提示訊息
let result = ref({})

// 刷新初始化功能
function refreshAnswer() {
  emptyNonRepetitiveNumber(); // 清空數據
  answerArray.value = nonRepetitiveNumber(4); // 重新賦值
}

// 鍵盤功能
function keyboardAction(item: string) {

  switch (item) {
    case 'c':
      resultNumber.value = []
      checkResult.value = new Set(resultNumber.value)
      checkBeyond()
      break;
    case 'x':
      resultNumber.value.pop()
      checkResult.value = new Set(resultNumber.value)
      checkBeyond()
      break;
    default:
      if (checkBeyond()) return; // 檢查是否超出輸入數量
      if (checkResultRepeat(item)) {
        promptMessage.value.type = 'warning'
        promptMessage.value.message = '請勿重複輸入！！！！！！！！！'
      } else {
        promptMessage.value.type = ''
        promptMessage.value.message = ''
      }
      resultNumber.value = Array.from(checkResult.value) as number[]
      break;
  }
}

function getCheckRepeat(index: number) {
  if (resultNumber.value.indexOf(index) !== -1) {
    return true
  } else {
    return false
  }
}

function setResult() {
  result.value = compareWith1A2B(answerArray.value, resultNumber.value)
  checkRepeat.value = compareWithNumberArray(
      answerArray.value,
      resultNumber.value,
  );
}

function checkBeyond() {
  let isBeyond = false
  // 判斷是否輸入超出
  if (resultNumber.value.length >= 4) {
    promptMessage.value.type = 'warning'
    promptMessage.value.message = '輸入數字數量已超過四個,請勿再輸入！！！！'
    isBeyond = true
  } else {
    promptMessage.value.type = ''
    promptMessage.value.message = ''
  }
  return isBeyond
}


// 判斷是否有輸入進重複值
function checkResultRepeat(value): boolean {
  let isRepeat = false

  if (!checkResult.value.has(value)) {
    checkResult.value.add(value)
  } else {
    isRepeat = true
  }

  return isRepeat
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .game-item {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 400px;
    min-height: 520px;
    max-height: 900px;
    border-width:4px;
    border-style: dashed;
    border-radius: 5px;
    padding: 10px;
  }
  .content {
    flex-grow: 1;
  }
}

.answer-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .answer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 40px;
    border-width:4px;
    border-style: double;
    flex-direction: column;
  }
}

.result {
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
  .result-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result-answer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 40px;
    border-width:4px;
    border-style: dashed solid;
  }
}

.numeric-keyboard {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .keyboard {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 40px;
    border-width:4px;
    border-collapse: collapse;
    border-style: inset;
  }
}

.beyond {
  margin: 10px 0px;
}

.submit-button {
  width: 100%;
  height: 45px;
}
</style>
