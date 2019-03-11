
module.exports = [
  {
    method: ['get','post'],
    path: '/api/driver/getList',
    controller:  function (req, res, next) {
      console.log('/api/driver/getList')
      // setTimeout(()=>{
        res.json({
          total: 100,
          driverList: getDriverList()
        });
      // },1000)
    },
  },
  {
    method: 'get',
    path: '/api/driver/getList2',
    controller:  function (req, res, next) {
      setTimeout(()=>{
        res.json({
          total: 100,
          driverList: getDriverList()
        });
      },1000)
    },
  },
  {
    method: ['get', 'post'],
    path: '/cml-yanxuan/mock/getHomeImgList.json',
    controller: function (req, res, next) {
      res.json({
        code: 0,
        data: {
          bannerImgList: [
            {imgUrl: 'https://yanxuan.nosdn.127.net/288bf88910aeba6d89689b99bec93133.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/3804d6f02516e59927e07f091c8f1b27.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/ce535663c045b5e877540b0e0be16bb3.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/06af49f2a59b00ad080aeb03fb8d408f.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/7c94908d8e197cc99e942324c5cc526e.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/96cf611743d7b382c11031f29152fa04.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/973e299ac2e80c03acfb5d2d4501231c.jpg?imageView&quality=75&thumbnail=750x0'}
          ],
          classifyImgList: [
            {imgUrl: 'https://yanxuan.nosdn.127.net/9cdedb90a09cf061cfa19f3e21321c73.png', title: '居家'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/57e39dc404f1ce90b959d76b9abe4314.png', title: '鞋包分配'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/2b580df265124836dcd96b1c88068127.png', title: '服装'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/a53fff4d3cf0f4dedd78a8a0f2b129c9.png', title: '电器'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/6147b31404d5ddf1207a8363605aebf9.png', title: '婴童'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/8d29af79c24d78a3dcf7d61249702dcf.png', title: '饮食'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/2b9a25b6ea81655eb431944d3d57185f.png', title: '洗护'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/293f2341415d70bf7c6460c77fa07f41.png', title: '餐厨'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/2fbba45f945ee592d5470269d9e61f1c.png', title: '文体'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/54947b070f8af594dd46069f2d3bdd34.png', title: '特色区'}
          ],
          disscountPriceImgUrl: 'https://yanxuan.nosdn.127.net/15468670774810413.gif?imageView&thumbnail=750x0&quality=75',
          special: {
            newPerson: 'https://yanxuan.nosdn.127.net/15468671496890421.png',
            temai: 'https://yanxuan.nosdn.127.net/15468671650860425.png',
            qingdan: 'https://yanxuan.nosdn.127.net/15468671650860425.png'
          }
        }
      });
    }
  },
  {
    method: ['get', 'post'],
    path: '/cml-yanxuan/mock/listImages.json',
    controller: function (req, res, next) {
      res.json({
        code: 0,
        data: {
          topImgUrl: 'https://yanxuan.nosdn.127.net/4972949f269e7295a4f37e99a303553e.jpg?quality=85&thumbnail=750x0&imageView',
          list: [
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330',
              des: '400跟纯棉贡缎',
              name: '60s锦绵贡缎四件套',
              money: '￥400',
              tag: ['APP特惠']
            },
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
              des: '少女粉润贡缎',
              name: '朱莉.粉唐四件套',
              money: '￥359',
              tag: ['年货节特卖', '满赠']
            },
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/9f3c89c8b98fb06968c67edb12a195cf.png?imageView&quality=65&thumbnail=330x330',
              des: '少女粉润贡缎',
              name: '朱莉.粉唐四件套',
              money: '￥359',
              tag: []
            },
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330',
              des: '入门享受奢华感受',
              name: '60s锦绵贡缎四件套',
              money: '￥400',
              tag: ['三石福利价']
            },
          ]
        }
      });
    }
  },
  {
    method: ['get', 'post'],
    path: '/cml-yanxuan/mock/detailInfo.json',
    controller: function (req, res, next) {
      res.json({
        code: 0,
        data: {
          carouselList: [
            {imgUrl: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/5142255cef97dafd012bb73423eff4d4.png?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/0e72c98273b50c0959d34662c2fad4e8.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/44334a3a100aa6fa974c17e352969a6f.jpg?imageView&quality=75&thumbnail=750x0'},
            {imgUrl: 'https://yanxuan.nosdn.127.net/bf216b5af1dc8cdb5a70e87b8271028c.png?imageView&quality=75&thumbnail=750x0'}
          ],
          description: [
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/17e5327561f5b9df04f7d000a8c71bb2.jpg',
              tag1: '贡缎细糯',
              tag2: '如绸光泽'
            },
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/459cfd6a33991746fc2cf452642c7c68.jpg',
              tag1: '高支纯棉',
              tag2: '新贵臻密'
            },
            {
              imgUrl: 'https://yanxuan.nosdn.127.net/964045a4796d70488adfef26a3093e35.jpg',
              tag1: '同色边框',
              tag2: '精致恰好'
            }

          ],
          money: '￥469',
          tag: 'App特惠￥455.00'
        }
      });
    }
  },
  {
    method: ['get', 'post'],
    path: '/cml-yanxuan/mock/yanxuan.json',
    controller: function (req, res, next) {
      res.json({
        "errno": "0",
        "errmsg": "",
        "data": {
          "result": {
            "banners": [
              {
                "title": "",
                "url": "https://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg"
              },
              {
                "title": "",
                "url": "https://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg"
              },
              {
                "title": "",
                "url": "https://doc.zwwill.com/yanxuan/imgs/banner-1.jpg"
              },
              {
                "title": "",
                "url": "https://doc.zwwill.com/yanxuan/imgs/banner-8.jpg"
              },
              {
                "title": "",
                "url": "https://doc.zwwill.com/yanxuan/imgs/banner-2.jpg"
              },
              {
                "title": "",
                "url": "https://doc.zwwill.com/yanxuan/imgs/banner-4.jpg"
              },
              {
                "title": "",
                "url": "https://doc.zwwill.com/yanxuan/imgs/banner-6.jpg"
              }
            ],
            "makers": {
              "title": "品牌制造商直供",
              "list": [
                {
                  "name": "新秀丽制造商",
                  "price": "59",
                  "state": "上新",
                  "bg": "https://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
                  "url": "https%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
                },
                {
                  "name": "MUJI制造商",
                  "price": "12.9",
                  "state": "上新",
                  "bg": "https://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
                  "url": "https%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
                },
                {
                  "name": "CK制造商",
                  "price": "29",
                  "state": "上新",
                  "bg": "https://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
                  "url": "https%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
                },
                {
                  "name": "Adidas制造商",
                  "price": "29",
                  "bg": "https://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
                  "url": "https%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
                }
              ]
            },
            "recommend": {
              "head1": {
                "tlt": "周一周四 · 新品发布",
                "tltBg": "https://doc.zwwill.com/yanxuan/imgs/bg-new.png",
                "url": "https://m.you.163.com/item/newItem"
              },
              "goods1": [
                {
                  "tlt": "日式和风声波式电动牙刷",
                  "img": "https://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",
                  "info": "进口刷毛，专利技术",
                  "price": "119"
                },
                {
                  "tlt": "小馒头 多色双肩包",
                  "img": "https://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",
                  "info": "奶油色泽，小巧减龄",
                  "price": "79"
                },
                {
                  "tlt": "多功能商务双肩包",
                  "img": "https://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",
                  "info": "17个功能分区，内置分层收纳",
                  "price": "334"
                },
                {
                  "tlt": "切尔西牛皮女靴",
                  "img": "https://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",
                  "info": "经典牛皮切尔西，时尚帅气",
                  "price": "289"
                },
                {
                  "tlt": "清心花茶壶套装",
                  "img": "https://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330",
                  "info": "明亮通透，滤茶迅速",
                  "price": "119"
                },
                {
                  "tlt": "全棉色织磨毛四件套",
                  "img": "https://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",
                  "info": "优雅色织，温暖磨毛",
                  "price": "299"
                },
                {
                  "tlt": "黑凤梨 20寸PC膜拉链登机箱",
                  "img": "https://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",
                  "info": "热卖9万只，网易人手1只",
                  "price": "185"
                },
                {
                  "tlt": "日式和风敞口保温杯",
                  "img": "https://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",
                  "info": "真空隔热，保温保冷",
                  "price": "32"
                }
              ],
              "head2": {
                "tlt": "周一周四 · 新品发布",
                "tltBg": "https://doc.zwwill.com/yanxuan/imgs/bg-new.png",
                "url": "https://m.you.163.com/item/newItem"
              },
              "goods2": [
                {
                  "tlt": "日式和风声波式电动牙刷",
                  "img": "https://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",
                  "info": "进口刷毛，专利技术",
                  "price": "119"
                },
                {
                  "tlt": "小馒头 多色双肩包",
                  "img": "https://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",
                  "info": "奶油色泽，小巧减龄",
                  "price": "79"
                },
                {
                  "tlt": "多功能商务双肩包",
                  "img": "https://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",
                  "info": "17个功能分区，内置分层收纳",
                  "price": "334"
                },
                {
                  "tlt": "切尔西牛皮女靴",
                  "img": "https://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",
                  "info": "经典牛皮切尔西，时尚帅气",
                  "price": "289"
                },
                {
                  "tlt": "清心花茶壶套装",
                  "img": "https://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330",
                  "info": "明亮通透，滤茶迅速",
                  "price": "119"
                },
                {
                  "tlt": "全棉色织磨毛四件套",
                  "img": "https://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",
                  "info": "优雅色织，温暖磨毛",
                  "price": "299"
                },
                {
                  "tlt": "黑凤梨 20寸PC膜拉链登机箱",
                  "img": "https://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",
                  "info": "热卖9万只，网易人手1只",
                  "price": "185"
                },
                {
                  "tlt": "日式和风敞口保温杯",
                  "img": "https://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",
                  "info": "真空隔热，保温保冷",
                  "price": "32"
                }
              ]
            },
            "goods": [
              {
                "tlt": "日式和风敞口保温杯",
                "img": "https://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",
                "info": "真空隔热，保温保冷",
                "url": "https://m.you.163.com/item/newItem",
                "price": "32"
              },
              {
                "tlt": "切尔西牛皮女靴",
                "img": "https://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",
                "info": "奶油色泽，小巧减龄",
                "url": "https://m.you.163.com/item/newItem",
                "price": "32"
              },
              {
                "tlt": "小馒头多色双肩包",
                "img": "https://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",
                "info": "奶油色泽，小巧减龄",
                "url": "https://m.you.163.com/item/newItem",
                "price": "79"
              },
              {
                "tlt": "全棉色织磨毛四件套",
                "img": "https://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",
                "info": "优雅色织，温暖磨毛",
                "url": "https://m.you.163.com/item/newItem",
                "price": "299"
              },
              {
                "tlt": "日式和风声波式电动牙刷",
                "img": "https://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",
                "info": "进口刷毛，专利技术",
                "url": "https://m.you.163.com/item/newItem",
                "price": "119"
              },
              {
                "tlt": "多功能商务双肩包",
                "img": "https://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",
                "info": "17个功能分区，内置分层收纳",
                "url": "https://m.you.163.com/item/newItem",
                "price": "334"
              },
              {
                "tlt": "黑凤梨20寸PC膜拉链登机箱",
                "img": "https://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",
                "info": "热卖9万只，网易人手1只",
                "url": "https://m.you.163.com/item/newItem",
                "price": "185"
              },
              {
                "tlt": "日式蓬软太鼓抱枕",
                "img": "https://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",
                "info": "萌趣太鼓造型 软糯轻柔回弹",
                "url": "https://m.you.163.com/item/newItem",
                "price": "29"
              },
              {
                "tlt": "可水洗抗菌防螨丝羽绒枕",
                "img": "https://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",
                "info": "进口防螨布，热销50万件",
                "url": "https://m.you.163.com/item/newItem",
                "price": "99"
              },
              {
                "tlt": "双宫茧桑蚕丝被 空调被",
                "img": "https://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",
                "info": "一级桑蚕丝，吸湿透气柔软",
                "url": "https://m.you.163.com/item/newItem",
                "price": "479"
              },
              {
                "tlt": "怀抱休闲椅组合（皮款）",
                "img": "https://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",
                "info": "葛优躺神器皮款",
                "url": "https://m.you.163.com/item/newItem",
                "price": "3999"
              },
              {
                "tlt": "欧式哑光餐具套装",
                "img": "https://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",
                "info": "德化白瓷，坚实耐用",
                "url": "https://m.you.163.com/item/newItem",
                "price": "189"
              },
              {
                "tlt": "清新两用杯",
                "img": "https://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",
                "info": "办公杯优选 轻松饮茶",
                "url": "https://m.you.163.com/item/newItem",
                "price": "52"
              },
              {
                "tlt": "两带式男/女款拖鞋",
                "img": "https://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",
                "info": "鞋杯随脚型而变，舒适呵护",
                "url": "https://m.you.163.com/item/newItem",
                "price": "69.9"
              }
            ],
            "topics": [
              {
                "name": "严选look",
                "img": "https://yanxuan.nosdn.127.net/15030393722652401.jpg"
              },
              {
                "name": "严选推荐",
                "img": "https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg"
              },
              {
                "name": "丁磊私物推荐",
                "img": "https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg"
              },
              {
                "name": "挑款师推荐",
                "img": "https://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png"
              }
            ],
            "articles": [
              {
                "auther": "严选推荐",
                "autherimg": "https://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64",
                "tlt": "年中扫一扫，下半年运势好",
                "info": "6个家庭清洁小技巧",
                "price": "6.9",
                "img": "https://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg"
              },
              {
                "auther": "服装组：小服",
                "autherimg": "https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64",
                "tlt": "小姐姐们的运动衣提前上架啦",
                "info": "前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。",
                "price": "",
                "img": [
                  "https://yanxuan.nosdn.127.net/15041772896010423.jpg",
                  "https://yanxuan.nosdn.127.net/15041772789070419.jpg",
                  "https://yanxuan.nosdn.127.net/15041772808640420.jpg"
                ]
              },
              {
                "auther": "居家组：朵朵",
                "autherimg": "https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64",
                "tlt": "初秋，最想用它来裸睡",
                "info": "连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...",
                "price": "",
                "img": [
                  "https://yanxuan.nosdn.127.net/15040927525260414.jpg",
                  "https://yanxuan.nosdn.127.net/15040927586650416.jpg",
                  "https://yanxuan.nosdn.127.net/15040927556820415.jpg"
                ]
              },
              {
                "auther": "严选推荐",
                "autherimg": "https://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64",
                "tlt": "不为繁华易匠心",
                "info": "那些值得珍藏的严选手作好物",
                "price": "29",
                "img": "https://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg"
              }
            ],
            "classes": [
              "推荐区",
              "家装区",
              "居家",
              "餐厨",
              "配件",
              "服装",
              "电器",
              "洗护",
              "杂货",
              "饮食",
              "婴童",
              "志趣"
            ],
            "subclasses": [
              {
                "name": "中秋系列",
                "img": "https://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "超值套装",
                "img": "https://yanxuan.nosdn.127.net/bd6f7deba69c8af2f6bb80025d7b98de.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "热卖爆品",
                "img": "https://yanxuan.nosdn.127.net/c3418cc60d3968263c5b2ac7fb153c34.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "999+好评",
                "img": "https://yanxuan.nosdn.127.net/87d1cb1bc196c5775b17788aea1c2239.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "boss推荐",
                "img": "https://yanxuan.nosdn.127.net/fbee769af73c0f63f6120eb27ff3ce96.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "明星推荐",
                "img": "https://yanxuan.nosdn.127.net/7dea8f7e0e706804c3307504e2e7c463.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "黑凤梨系列",
                "img": "https://yanxuan.nosdn.127.net/a4a14669ce1fa497aece9a20c669196e.png?imageView&quality=85&thumbnail=144x144"
              },
              {
                "name": "趣味粉系列",
                "img": "https://yanxuan.nosdn.127.net/87fc01e5876482d521ecca13aea42653.png?imageView&quality=85&thumbnail=144x144"
              }
            ]
          }
        }
      });
    }
  }
]

function getDriverList() {
  let result = [];
  for(let i=0;i< 10;i++) {
    result.push({
      cityName: '北京',
      driverId: '123'+i,
      phone: '1762011465'+i,
      joinTime: Date.now(),
      hasPrivateCar: i%2 == 0,
      licencePlateNo: '京C12345'+i,
      identityCard: '130274203472937'+i,
      carId: '123',
      carColor: '红',
      carType: 'A6',
      carBrand: '奥迪',
      isBinding: i%2 == 0,
      driverStatus: {
        workStatus: i%2,
        serviceStatus: i%2
      },
      accountStatus: i%2  
    })
  }
  return result;
}