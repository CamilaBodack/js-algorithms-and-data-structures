/*
Scripting: Boo who
------------------
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
	return (typeof bool === 'boolean') ?  true : false
}

booWho(false);
