function createVariables()
{
	var v1 = 0, 
		v2 = 0;
	var flag = false;
	var operator = 0;
	var decimalDivider = 1;
	var mainDisplay, debuggingDisplay1, debuggingDisplay2;
	
	var getV1 = function () {
		return v1;
	};
	var setV1 = function (val) {
		v1 = val;
	};
		
	var getV2 = function () {
		return v2;
	};
	var setV2 = function (val) {
		v2 = val;
	};
		
	var getFlag = function () {
		return flag;
	};
	var setFlag = function (val) {
		flag = val;
	};
		
	var getOperator = function () {
		return operator;
	};
	var setOperator = function (val) {
		operator = val;
	};
	
	var getDecimalDivider = function () {
		return decimalDivider;
	};
	var setDecimalDivider = function (val) {
		decimalDivider = val;
	};
		
	var getMainDisplay = function () {
		return mainDisplay;
	};
	var setMainDisplay = function (val) {
		mainDisplay = val;
	};
	
	var getDebuggingDisplay1 = function () {
		return debuggingDisplay1;
	};	
	var setDebuggingDisplay1 = function (val) {
		debuggingDisplay1 = val;
	};
	
	var getDebuggingDisplay2 = function () {
		return debuggingDisplay2;
	};
	var setDebuggingDisplay2 = function (val) {
		debuggingDisplay2 = val;
	};
	
	return {
		"getV1": getV1,
		"setV1": setV1,
		"getV2": getV2,
		"setV2": setV2,
		"getFlag": getFlag,
		"setFlag": setFlag,
		"getOperator": getOperator,
		"setOperator": setOperator,
		"getDecimalDivider": getDecimalDivider,
		"setDecimalDivider": setDecimalDivider,
		"getMainDisplay": getMainDisplay,
		"setMainDisplay": setMainDisplay,
		"getDebuggingDisplay1": getDebuggingDisplay1,
		"setDebuggingDisplay1": setDebuggingDisplay1,
		"getDebuggingDisplay2": getDebuggingDisplay2,
		"setDebuggingDisplay2": setDebuggingDisplay2
	};
}

var staticVar = createVariables();

function initialization()
{
	staticVar.setMainDisplay(document.getElementById("display"));
	staticVar.setDebuggingDisplay1(document.getElementById("display1"));
	staticVar.setDebuggingDisplay2(document.getElementById("display2"));
	clearScreen();
}

function clearScreen()
{
	staticVar.getMainDisplay().value = "";
	staticVar.getDebuggingDisplay1().value = "";
	staticVar.getDebuggingDisplay2().value = "";
	staticVar.setV1(0);
	staticVar.setV2(0);
	staticVar.setDecimalDivider(1);
}
function input(num)
{
	var decimalDivider = staticVar.getDecimalDivider();
	var flag = staticVar.getFlag();
	var v1 = staticVar.getV1();
	var v2 = staticVar.getV2();
	
	if (decimalDivider == 1)
	{
		if(flag == false)
			v1 = v1 * 10 + num;
		else
			v2 = v2 * 10 + num;
	}
	else
	{
		if(flag == false)
			v1 = v1 + num / decimalDivider;
		else
			v2 = v2 + num / decimalDivider;
		decimalDivider *= 10;
	}
	staticVar.getMainDisplay().value += num.toString();
	staticVar.getDebuggingDisplay1().value = v1;
	staticVar.getDebuggingDisplay2().value = v2;
	
	staticVar.setDecimalDivider(decimalDivider);
	staticVar.setFlag(flag);
	staticVar.setV1(v1);
	staticVar.setV2(v2);
}

function point()
{
	staticVar.setDecimalDivider(10);
	staticVar.getMainDisplay().value += '.';
}

function operation(op)
{
	staticVar.setFlag(true);
	staticVar.setDecimalDivider(1);
	staticVar.getMainDisplay().value += op;
	staticVar.setOperator(op);
}

function output()
{
	var v1 = staticVar.getV1();
	var v2 = staticVar.getV2();
	var operator = staticVar.getOperator();
	switch (operator) {
		case '+':
			v1 += v2;
			break;
		case '-':
			v1 -= v2;
			break;
		case '*':
			v1 *= v2;
			break;
		case '/':
			v1 /= v2;
			break;
		default:
			alert("Error! Operation was not selected!");
	}
	staticVar.getMainDisplay().value = v1.toString();
	staticVar.setV1(v1);
	staticVar.setV2(0);
	staticVar.setDecimalDivider(1);
	
	staticVar.getDebuggingDisplay1().value = v1;
	staticVar.getDebuggingDisplay2().value = 0;
}