var exercise = {};
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


exercise.one = function(){

    var urls = ["http://student.mit.edu/catalog/m1a.html",
        "http://student.mit.edu/catalog/m1b.html",
        "http://student.mit.edu/catalog/m1c.html",
        'http://student.mit.edu/catalog/m2a.html',
        'http://student.mit.edu/catalog/m2b.html',
        'http://student.mit.edu/catalog/m2c.html',
        'http://student.mit.edu/catalog/m3a.html',
        'http://student.mit.edu/catalog/m3b.html',
        'http://student.mit.edu/catalog/m4a.html',
        'http://student.mit.edu/catalog/m4b.html',
        'http://student.mit.edu/catalog/m4c.html',
        'http://student.mit.edu/catalog/m4d.html',
        'http://student.mit.edu/catalog/m4e.html',
        'http://student.mit.edu/catalog/m4f.html',
        'http://student.mit.edu/catalog/m4g.html',
        'http://student.mit.edu/catalog/m5a.html',
        'http://student.mit.edu/catalog/m5b.html',
        'http://student.mit.edu/catalog/m6a.html',
        'http://student.mit.edu/catalog/m6b.html',
        'http://student.mit.edu/catalog/m6c.html',
        'http://student.mit.edu/catalog/m7a.html',
        'http://student.mit.edu/catalog/m8a.html',
        'http://student.mit.edu/catalog/m8b.html',
        'http://student.mit.edu/catalog/m9a.html',
        'http://student.mit.edu/catalog/m9b.html',
        'http://student.mit.edu/catalog/m10a.html',
        'http://student.mit.edu/catalog/m10b.html',
        'http://student.mit.edu/catalog/m11a.html',
        'http://student.mit.edu/catalog/m11b.html',
        'http://student.mit.edu/catalog/m11c.html',
        'http://student.mit.edu/catalog/m12a.html',
        'http://student.mit.edu/catalog/m12b.html',
        'http://student.mit.edu/catalog/m12c.html',
        'http://student.mit.edu/catalog/m14a.html',
        'http://student.mit.edu/catalog/m14b.html',
        'http://student.mit.edu/catalog/m15a.html',
        'http://student.mit.edu/catalog/m15b.html',
        'http://student.mit.edu/catalog/m15c.html',
        'http://student.mit.edu/catalog/m16a.html',
        'http://student.mit.edu/catalog/m16b.html',
        'http://student.mit.edu/catalog/m17a.html',
        'http://student.mit.edu/catalog/m17b.html',
        'http://student.mit.edu/catalog/m18a.html',
        'http://student.mit.edu/catalog/m18b.html',
        'http://student.mit.edu/catalog/m20a.html',
        'http://student.mit.edu/catalog/m21a.html',
        'http://student.mit.edu/catalog/m21Aa.html',
        'http://student.mit.edu/catalog/mCMSa.html',
        'http://student.mit.edu/catalog/m21Ga.html',
        'http://student.mit.edu/catalog/m21Gb.html',
        'http://student.mit.edu/catalog/m21Gc.html',
        'http://student.mit.edu/catalog/m21Gd.html',
        'http://student.mit.edu/catalog/m21Ge.html',
        'http://student.mit.edu/catalog/m21Gf.html',
        'http://student.mit.edu/catalog/m21Gg.html',
        'http://student.mit.edu/catalog/m21Gh.html',
        'http://student.mit.edu/catalog/m21Gr.html',
        'http://student.mit.edu/catalog/m21Gs.html',
        'http://student.mit.edu/catalog/m21Wa.html',
        'http://student.mit.edu/catalog/m21Ha.html',
        'http://student.mit.edu/catalog/m21Hb.html',
        'http://student.mit.edu/catalog/m21La.html',
        'http://student.mit.edu/catalog/m21Ma.html',
        'http://student.mit.edu/catalog/m21Mb.html',
        'http://student.mit.edu/catalog/m21Wb.html',
        'http://student.mit.edu/catalog/mWGSa.html',
        'http://student.mit.edu/catalog/m22a.html',
        'http://student.mit.edu/catalog/m22b.html',
        'http://student.mit.edu/catalog/m22c.html',
        'http://student.mit.edu/catalog/m24b.html',
        'http://student.mit.edu/catalog/m24a.html',
        'http://student.mit.edu/catalog/mCCa.html',
        'http://student.mit.edu/catalog/mCSBa.html',
        'http://student.mit.edu/catalog/mECa.html',
        'http://student.mit.edu/catalog/mEMa.html',
        'http://student.mit.edu/catalog/mESa.html',
        'http://student.mit.edu/catalog/mHSTa.html',
        'http://student.mit.edu/catalog/mHSTb.html',
        'http://student.mit.edu/catalog/mIDSa.html',
        'http://student.mit.edu/catalog/mMASa.html',
        'http://student.mit.edu/catalog/mSCMa.html',
        'http://student.mit.edu/catalog/mASa.html',
        'http://student.mit.edu/catalog/mMSa.html',
        'http://student.mit.edu/catalog/mNSa.html',
        'http://student.mit.edu/catalog/mSTSa.html',
        'http://student.mit.edu/catalog/mSTSb.html',
        'http://student.mit.edu/catalog/mSWEa.html',
        'http://student.mit.edu/catalog/mSPa.html'];
    
    //console.log(urls);
    return urls;
};

//--------------------------------------------------

exercise.two = function(){
    var urls = exercise.one();

    exercise.get = function(url){
        return new Promise(function(resolve, reject){

            function callback(error, response, body){
                if(!error){
                    resolve(body);
                }
                else{
                    reject(error);
                }
            }
            request(url, callback);
        });

    };

    exercise.save = function(data, filename){

        return new Promise(function(resolve, reject){

            // write listings to file
            fs.writeFile(filename, data, function(err) {
                if(err) {
                    reject(error);
                }
                resolve('The ' + filename + ' was saved!');
            }); 
        });
    };

//-------------------------------------------
    urls.forEach(function(url,i){

        var page = exercise.get(url);
        page.then(function(body){
       // console.log(body);
            var filename = 'catalog/data' + i + '.txt';
            return exercise.save(body,filename);
        }).
        then(function(msg){
        //console.log(msg);
        });
    });
};    
//---------------------------------------------------

exercise.three = function(){
    var urls = exercise.one;
    var concat = require('concat-files');
    var files = [];
    for(var i = 0; i<89; i++){
        files.push('./catalog/data'+i+'.txt');
    }
    //console.log('exercise 3 array:'+files);
    concat(files, './catalog/catalog.txt');
    // var catalog = fs.readFileSync('./catalog/catalog.txt','UTF8');
    //console.log(catalog);
};
    
//---------------------------------------------------

exercise.four = function(){
    var minify = require('html-minifier').minify;
    var body = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
    //console.log(body);
 
    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');
    //console.log(body);
   
    fs.writeFileSync('./catalog/catalog.txt',body);
    return body;

    // var output = minify(body, {
    //     collapseWhitespace: true
    // });
    // output;
    // fs.writeFile('./catalog/minicatalog.html', output);
    // console.log(output);
};

//---------------------------------------------------

exercise.five = function(){
    var body = exercise.four();
    var cheerio = require('cheerio'),
    $ = cheerio.load(body);


    var expression = /<h3>(.*?)<br><I>/g;
    var courses = body.match(expression);
    //console.log(courses);   
    return courses;

};
    //  Return an array of courses.


exercise.six = function(){

    //  Return an array of course titles.
    //  You can use the NPM package cheerio.

    var body = exercise.four();
    var cheerio = require('cheerio'),
    $ = cheerio.load(body);
    //var $ = exercise.five();
        
    //exercise.getCourseTitles = function(){
        var titles = [];
        $('h3').each(function(i,element){
            titles.push($(element).text());
        });
        //console.log(titles);
        return titles;

};

exercise.seven = function(){
   
    //  Filter out punctuation, numbers,
    //  *** FILTERED OUT COMMON WORDS IN PART EIGHT, BELOW***
    //  Return clean array.
    
    var titles = exercise.six();   //example was var.titles = exercise.GetCourseTitles
    var words = titles.map(function(titles){
        return titles.toLowerCase().match(/[a-z]+/g);
    });
    //console.log(words);
    return words;

};

exercise.eight = function(){

    //  Make an array of words from the titles.
    //  Return array of words.

    var words = exercise.seven();
   var wordsFlat = words.reduce(function(prev,curr){
        return prev.concat(curr);
    },[]);
    //console.log(wordsFlat);
    //return wordsFlat;

    var trimmedWords = wordsFlat.filter(function(item){
        if(item.length > 2){
            return item;
        }
    })
    //console.log(trimmedWords);
    return trimmedWords;
};

exercise.nine = function(){

    //  Count the word frequency.
    //  Return a word count array.

    var wordsFlat = exercise.eight();


    var countedWords = wordsFlat.reduce(function (allWords, word) { 
        if (word in allWords) {
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        //console.log(allWords);
        return allWords;
    }, {});
console.log(countedWords);
return countedWords;


};

module.exports = exercise;
