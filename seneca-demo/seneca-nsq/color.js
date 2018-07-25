module.exports = function color() {
  this.add( 'color:red', function(args,done){
    console.log(`HHHHHHHHH`)
    done(null, {hex:'#FF0000'});
  })
}
