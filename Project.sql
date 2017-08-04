SET NAMES UTF8;

USE project;

CREATE TABLE navList(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(32),
    myIntroduce VARCHAR(32),
    myWorks VARCHAR(32),
    mySkill VARCHAR(32),
    myWork VARCHAR(32),
    mySelf VARCHAR(32)
);
INSERT INTO navList VALUES
(NULL,'马海潮的主页','关于我','相册','专业技能','求职意向','自我评价');

CREATE TABLE content(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32),
    title VARCHAR(32),
    summary VARCHAR(1024),
    details VARCHAR(1024)
);
INSERT INTO content VALUES
(NULL,'myIntroduce','关于我','2013年毕业于北京建筑大学<br>信息科学与技术专业<br>学习和解决问题是一个充实愉悦的过程','[{"dIcon":"glyphicon glyphicon-book","dTitle":"学历","dContent":"本科"},{"dIcon":"glyphicon glyphicon-user","dTitle":"年龄","dContent":"27"},{"dIcon":"glyphicon glyphicon-map-marker","dTitle":"位置","dContent":"北京"},{"dIcon":"glyphicon glyphicon-star","dTitle":"状态","dContent":"离职"}]'),
(NULL,'myWorks','相册','相册就想一本书，记录自己成长的过程','[{"src":"img/item-1.jpg","title":"123","summary":"this is a p"},{"src":"img/item-2.jpg","title":"123","summary":"this is a p"},{"src":"img/item-3.jpg","title":"123","summary":"this is a p"},{"src":"img/item-4.jpg","title":"123","summary":"this is a p"},{"src":"img/item-5.jpg","title":"123","summary":"this is a p"},{"src":"img/item-6.jpg","title":"123","summary":"this is a p"}]'),
(NULL,'mySkill','专业技能','熟练使用HTML5,CSS3,JavaScript。熟悉BootStrap、AngularJS、React、ionic等框架。','[{"title":"HTML&CSS","summary":"使用HTML&CSS完成静态页面及动效，熟悉H5新特性(canvas,svg)绘图，(vedio,audio)音视频，(storage)存储。","score":85,"id":"c1"},{"title":"JS&jQ&AJAX","summary":"熟练使用JavaScript,DOM,BOM原生代码，jQuery，AJAX(熟练使用json)。熟悉ES6新特性(模板字符串，箭头函数等)，不断在自己代码中尝试使用。","score":80,"id":"c2"},{"title":"Boot&NG","summary":"使用boot开发响应式页面，简化内容和样式的设计及掌握css预编译器Less，使用NG框架开发基于MVC的SPA前端应用。","score":70,"id":"c3"},{"title":"PHP&MYSQL&HTTP","summary":"熟悉PHP&MYSQL&HTTP，能够编写数据库&PHP操作数据库。","score":60,"id":"c4"}]'),
(NULl,'myWork','求职意向','','[{"title":"工作地点","wIcon":"glyphicon glyphicon-map-marker","summary":"北京"},{"title":"职位","wIcon":"glyphicon glyphicon-hand-down","summary":"Web前端开发"}]'),
(NUll,'mySelf','自我评价',"对待工作认真负责，善于沟通、协调，有较强的组织能力与团队合作精神。<br>做事稳重、踏实、有责任心，上进心强、勤于学习能不断提高自身的能力与综合素质。<br>在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作。<br>稳定地提高自己的工作能力，与企业同步发展。",'null');
