// add vanilla javascript here



const TypeWriter = function(txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
  };
  
  // Type method
  TypeWriter.prototype.type = function() {
	// Current index of word
	const current = this.wordIndex % this.words.length;
  
	// get full text of current word
	const fullTxt = this.words[current];
  
	// check is deleting
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  // add char
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	// insert text into Element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
	//initial Type Speed
	let typeSpeed = 200;
  
	if (this.isDeleting) {
	  typeSpeed /= 2;
	}
  
	// check is word is complete
	if (!this.isDeleting && this.txt === fullTxt) {
	  // make a pause at End
	  typeSpeed = this.wait;
	  // set isDeleting to true
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  // move to the next word
	  this.wordIndex++;
	  // pause before start  typing
	  typeSpeed = 500;
	}
  
	setTimeout(() => {
	  this.type();
	}, typeSpeed);
  };
  // init on DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // init app
  function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
  
	//init Typewriter
	new TypeWriter(txtElement, words, wait);
  }