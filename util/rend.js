function Rend(res){
  this.res = res;
  this.args = {
    breadcrumbs: []
  };
}

function breadCrumb(fa, label, url){
  var c = {
    fa: fa,
    label: label
  };
  if( url ){ c.url = url; }
  this.args.breadcrumbs.push(c);
  return this;
}

function render(view){
  this.res.render(view, this.args);
}

Rend.prototype.bc = breadCrumb;
Rend.prototype.render = render;

module.exports = function(res){
  return new Rend(res);
};
