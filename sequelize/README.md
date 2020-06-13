# sequelize

## 时间问题
sequelize 配置timezone: '+08:00'(东八区)

## query 方法

[官方网站](https://sequelize.org/v5/manual/models-usage.html)

方法名  用法  作用
findByPk  Project.findByPk(123) 根据主键查找
findAll   Project.findOne({ where: {title: 'aProject'} })   根据条件查找
findOrCreate  User
  .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})