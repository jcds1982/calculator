<body>
<div class="grid">
    <input id="calc" class=" calculator_display span-4" type="text" value="0" readonly data-previous-value="0" data-type="input"/>
    <div class="span-4" id="messageSection" ></div>
    <button class="button c_action" onclick="clearValues()">C</button>
    <button class="button c_action" onclick="switchPositiveOrNegative()">+/-</button>
    <button class="button c_action">%</button>
    <button class="button c_operation" onclick="doCalculation('divide')">/</button>
    <button class="button c_number" onclick="inputValue('7')">7</button>
    <button class="button c_number" onclick="inputValue('8')">8</button>
    <button class="button c_number" onclick="inputValue('9')">9</button>
    <button class="button c_operation" onclick="doCalculation('multiply')">x</button>

    <button class="button c_number" onclick="inputValue('4')">4</button>
    <button class="button c_number" onclick="inputValue('5')">5</button>
    <button class="button c_number" onclick="inputValue('6')">6</button>
    <button class="button c_operation" onclick="doCalculation('subtract')">-</button>

    <button class="button c_number" onclick="inputValue('1')">1</button>
    <button class="button c_number" onclick="inputValue('2')">2</button>
    <button class="button c_number" onclick="inputValue('3')">3</button>
    <button class="button c_operation" onclick="doCalculation('add')">+</button>

    <button class="button_2_column c_number span-2" onclick="inputValue('0')">0</button>
    <button class="button c_number" onclick="inputValue('.')">.</button>
    <button class="button c_operation">=</button>
</div>
<script src="<?php echo "libraries/utils.js" ?>"></script>


</body>

