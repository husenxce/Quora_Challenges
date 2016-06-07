function processData(input) {
    //Enter your code here
    var info = [],
        window;
    var output = 0,
        ref = 0;

    for (var i = 0; i < input.split("\n").length; i++) { //parsing input.
        info[i] = input.split("\n")[i].split(" ");
    }

    for (var t = 0; t < (info[0][0] - info[0][1] + 1); t++) { //getting windows.
        output = 0, window = (info[1].slice(t, t + Number(info[0][1])));
        for (var j = 1; j < info[0][1]; j++) {

            (function(s) {
                //calculating nonincreasing and nondecreasing in a window.
                if (Number(window[s]) === Number(window[s - 1])) {
                    ref++;
                }
                if (Number(window[s]) > Number(window[s - 1])) {
                    output++;
                    if (window.length > 2) {
                        output += ref;
                        ref = 0;
                    }
                }
                if (Number(window[s]) < Number(window[s - 1])) {
                    output--;
                    if (window.length > 2) {
                        output -= ref;
                        ref = 0;
                    }
                }
            })(j);
        }
        if (window.length > 2 && output !== 0) {
            (output > 0) ? output++ : output;
            (output < 0) ? output-- : output;
            if (info[0][0] === info[0][1]) {
                (output > 0) ? output++ : output;
                (output < 0) ? output-- : output;
            }
        }
        console.log(output);
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});
