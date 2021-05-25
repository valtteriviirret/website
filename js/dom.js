'use strict'

// dom here
export const $ = ({id:id, class:c, q:q}) => {
	if(id) return document.getElementById(id)
	else if(c) return document.getElementsByClassName(c);
	else if(q) return document.querySelector(q);
}

export const make = (value) => document.createElement(value)