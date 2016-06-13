function patternChaser(str){

            //If string is less than 4 return No Pattern
            if(str.length < 4) return "No Pattern";

            //IF there are mulitple occurence of decimals return No Pattern ss
            if(/^\d+/.test(str)) return "NO Pattern";

            var newString, newString2, nmatch, maxTestCase, testRes = "", len = str.length;

            for (var i = 0; i < len; i++) {

                //If iteration has gotten to the second to the last string break out of the loop
                // and return testResult
                //NOte: if there are no match an empty string is returned.
                if (i === str.length-2) break;

                /*maxTestCase is used to evaluate the maximum test case for each iteration
                 * The maxTestCase is gotten by dividing the length of the  string into 2
                 * IF the value is odd ad one before division
                 * The maxTestCase reduces for every iteration*/
                maxTestCase = ((len - i) % 2 === 0) ? (((len - i)/2)+1) : (((len -i) + 1)/2);

                for (var j = 2; j < maxTestCase; j++) {

                    //Get a substring from the string
                    newString = str.substr(i, j);

                    var regEx = new RegExp(newString, "g");

                    //CHeck for matches for this substring in the whole string.
                    nmatch = str.match(regEx);

                    //If there is match and match is greater than one
                    if (nmatch.length > 1) {

                        newString2 = nmatch[0];

                        //If length of string is greater than the existing testREs length
                        //testRes = newString
                        if (newString2.length > testRes.length) {
                            testRes = newString2;
                        }
                    }
                }
            }
            return testRes;
        }
       // console.log(patternChaser("howarekddkdkdieeialskdoeiedkdklskdiamaboyandeiei383838iamaboyexx,x")); Quick Tet. This returns "iamaboy"..
