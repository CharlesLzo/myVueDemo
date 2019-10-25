import Mock from 'mockjs';

Mock.setup({timeout:500})//设置网络延迟

// let Random = Mock.Random()

Mock.mock('introduction/', 'POST', {
    // Mock.Random 提供的完整方法（占位符）：https://github.com/nuysoft/Mock/wiki/Mock.Random
    "code":200,
    "userId":"@id()",
    "date":"@date",
    "image":"@image('300x300', 'red', '#fff', 'jpg', '这是一张随机生成的图片！')"
    
})