/**
 * ApisController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home:function(req,res){
    Apis.find({}).exec(function(err, apis){
        if(err){
          res.send(500, {error: 'Database Error'});
        }
        res.view('pages/homepage', {apis:apis})
    });
  },
  list:function(req, res){
    Apis.find({}).exec(function(err, apis){
        if(err){
          res.send(500, {error: 'Database Error'});
        }
        res.view('list', {apis:apis})
    });
  },
  add: function (req, res) {
    res.view('add');
  },
  create: function(req, res){
    var title = req.body.title;
    var body = req.body.body;
    var environment = req.body.environment;

    Apis.create({title:title, body:body, environment:environment}).exec(function(err){
      if(err){
        res.send(500, {error: "Database Error"});
      }
      res.redirect('/apis/list');
    });
  },
  delete: function (req, res){
    Apis.destroy({id:req.params.id}).exec(function(err){
      if(err){
        res.send(500, {error: "Database Error"});
      }
      res.redirect('/apis/list');
    });
    return false;
  },
  edit: function(req,res){
    Apis.findOne({id:req.params.id}).exec(function(err, api){
      if(err){
        res.send(500, {error: "Database Error"});
      }
      res.view('edit', {api:api});
    });
  },
  update: function(req, res){
    var title = req.body.title;
    var body = req.body.body;
    var environment = req.body.environment;
    Apis.update({id:req.params.id}, {title:title, body:body, environment:environment}).exec(function(err){
      if(err){
        res.send(500, {error: "Database Error"});
      }
      res.redirect('/apis/list');
    });
    return false;
  },
}
