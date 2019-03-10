# Vue Basic 2 => Data and Methods
Assuming you have Vue installed as well as the extension <strong>Live Server</strong>, create a folder called "VueJS Tutorials". This folder will be your playground for practicing VueJs as well as learning VueJS. Now lets proceed to learning VueJS!!

NOTE that this tutorial is done with <strong>Visual Studio Code</strong> and you NEED to have understanding of Javascript before proceeding.

===============================================================================================

<h3>Data and Methods</h3>

Remember in <strong>index.html</strong> inside this div;

    <div id="vue-app">
      <h1>{{ name }}</h1>
    </div>

Notice that we called the </strong>data property name</strong> within it. Basically, we can call as many <strong>data properties</strong> as well as <strong>methods</strong> if we like. Okay, let's create a greet <strong>method</strong>.

Inside <strong>app.js</strong>, within <strong>Vue Instance</strong> under <strong>data</strong> add the following;

    methods: {
      greet: function(){
        return "Greetings"
      }
    }

<strong>greet:</strong> is the name of the method and to show that it is a method in JS, you have to add <strong>function(){}</strong>. In the {} of the function is where you include your codes. In this case we want the function to greet the user hence why we <strong>return "Greeting"</strong>.

Now in the index.html, within a div, add another line of codes underneath the <strong>data property</strong> of name.

    <div id="vue-app">
      <h1>{{ name }}</h1>
      <p>{{ greet() }}</p>
    </div>

And now if you call the function, it will not work because you forgot to add the <strong>coma(,)</strong> at the end of the <strong>data</strong> in the <strong>Vue Instance</strong>. Like this;

    new Vue({
      el: "#vue-app",
      data: {
        name: "James"
      },
      methods: {
        greet: function(){
          return "Greetings"
        },
      }
    });

Now notice that there is a <strong>,</strong> at the end of <strong>data</strong>. Basically, within the instance, always add a coma(,) at the end of each object if you wish too add more to the instance. If not it will not load. Now if you <strong>go live</strong>, everything will work accordingly. However, visually it will not be satisfactory because name is at the top and the greeting is at the bottom. We can tweak this to make it look slightly better. For that, go to <strong>index.html</strong> and modify the contents within the <strong>div</strong> to look like;

    <div id="vue-app">
      <h1>{{ greet() + " " + name }}</h1>
    </div>

Now it will say <strong>Greetings James</strong> which is better. However, we could also configure the greet <strong>function</strong> to give the desired output instead of <strong>{{ greet() + " " + name }}</strong>. For this, within the <strong>app.js</strong>, modify the greet function to;

    methods: {
      greet: function(){
        return "Greetings" + " " + this.name
      },
    }

Notice that we use <strong>this.name</strong>. In VueJS, all the data property is sort of stored at the top of the <strong>Vue Instance</strong> thus <strong>this</strong> refers to the <strong>Vue Instance</strong> and that is why we can call it. Next go to the <strong>index.html</strong> and modify the div to;

    <div id="vue-app">
      <h1>{{ greet() }}</h1>
    </div>

And we will still get the same output! Well this is it for now.