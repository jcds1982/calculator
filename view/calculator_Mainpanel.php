<body class="roboto-calc-font">

<h1>Calculator in Vanilla JavaScript</h1>
    <div class="calculator_container">
        <div class="grid">
            <input id="calc" class=" calculator_display span-4" type="text" value="0" readonly data-type="input"
                   data-previous-value="0" tabindex="-1" />

            <button class="button c_action" onclick="clearValues()" tabindex="-1">C</button>
            <button class="button c_action" onclick="switchPositiveOrNegative()" tabindex="-1">+/-</button>
            <button class="button c_action" onclick="inputValue('%')" tabindex="-1">%</button>
            <button class="button c_operation" onclick="inputValue('/')" tabindex="-1" >/</button>

            <button class="button c_number" onclick="inputValue('7')" tabindex="-1">7</button>
            <button class="button c_number" onclick="inputValue('8')" tabindex="-1">8 </button>
            <button class="button c_number" onclick="inputValue('9')" tabindex="-1">9</button>
            <button class="button c_operation" onclick="inputValue('*')" tabindex="-1" >*</button>

            <button class="button c_number" onclick="inputValue('4')" tabindex="-1">4</button>
            <button class="button c_number" onclick="inputValue('5')" tabindex="-1">5</button>
            <button class="button c_number" onclick="inputValue('6')" tabindex="-1">6</button>
            <button class="button c_operation" onclick="inputValue('-')" tabindex="-1" >-</button>

            <button class="button c_number" onclick="inputValue('1')" tabindex="-1">1</button>
            <button class="button c_number" onclick="inputValue('2')" tabindex="-1">2</button>
            <button class="button c_number" onclick="inputValue('3')" tabindex="-1">3</button>
            <button class="button c_operation" onclick="inputValue('+')" tabindex="-1">+</button>

            <button class="button_2_column c_number span-2" onclick="inputValue('0')" tabindex="-1">0</button>
            <button class="button c_number" onclick="inputValue('.')" tabindex="-1">.</button>
            <button class="button c_operation" onclick="inputValue('=' +
             '')" tabindex="-1">=</button>
            <span class="span-4">Created by JDQUADS</span>
        </div>

    </div>
    <script src="<?php echo "libraries/utils.js" ?>"></script>
</body>