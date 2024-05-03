//使用fullpage
$(function () {
    runSection = new FullPage({
    
        id : 'start', 
        slideTime: 900,
        effect: {
            transform: {
                translate: 'Y',
                scale: [0, 1],
                rotate: [0, 0]
            },
            opacity: [0, 1]
        },
        mode: 'touch,wheel,nav:navBar',
        easing: [0, .93, .39, .98],
        continuous : true,
        callback : function(index, thisPage) {
            var lastli = $('.liactive');
            lastli.removeClass('liactive');
            $('#li'+index).addClass('liactive');
        }
    });
});

//监听瓷器图片点击事件的函数
$(document).ready(function () {
    $('.porimg').click(function () {
        //显示详情盒子
        var porinfo = $('#porinfo');
        porinfo.css('display', 'flex').animate({
            right: '0'
        }, 250);

        //替换对应信息
        var nowid = $(this).attr('id').substring(9);
        var num = parseInt(nowid,10);
        var porinfoimg = $('#porinfoimg');
        var porname = $('#porname');
        var pordy = $('#pordy');
        var porloc = $('#porloc');
        var pordata = $('#pordata');
        var porinfopara = $('#porinfopara');
        porinfoimg.css('background-image', 'url(' + porcelains[num-1].imgurl + ')');
        porname.html(porcelains[num-1].porname);
        pordy.html(porcelains[num-1].pordy);
        porloc.html(porcelains[num-1].porloc);
        pordata.html(porcelains[num-1].pordata);
        porinfopara.html(porcelains[num-1].porinfo);
    });
});

//监听关闭详情盒子的按钮
$(document).ready(function () {
    $('#closeimg').click(function () {
        var porinfo = $('#porinfo');
        if (porinfo.css('right') == '0px') {
        porinfo.animate({
        right: '-75%'
        }, 750, function() {
        porinfo.css('display', 'none');
        });
        } 
    });
});

// 监听 li 元素的点击事件
$(document).ready(function() {
    $('#navBar li').on('click', function() {
        var lastli = $('.liactive');
        lastli.removeClass('liactive')
        $(this).addClass('liactive');
    });
});


var porcelains = [
    {
        imgurl:'../static/image/han_1.jpg',
        porname:'名称：【青釉波纹双耳壶】',
        pordy:'朝代：汉代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高23.7厘米，口径12.7厘米，足径10.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：造型古朴端庄，与西汉时期陶壶和青铜壶造型基本相同。东汉时期，在浙江上虞、绍兴等江南地区，出现了青瓷的烧造，采用高岭土做胎，通体施青釉，胎釉结合紧密，在高达1300℃的高温下烧成，胎质坚密，吸水率低，釉色莹润，已经具备了成熟青瓷的各项条件。东汉青瓷胎体较厚且呈深灰色， 青瓷色调呈青绿色或黄褐色，釉层光洁，装饰纹样多见弦纹、云气纹和水波纹等。'
    },
    {
        imgurl:'../static/image/sanguo_1.jpg',
        porname:'名称：【青釉堆塑谷仓罐】',
        pordy:'朝代：三国',
        porloc:'位置：故宫博物院',
        pordata:'数据：高46.4厘米，口径11.3厘米，底径13.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：谷仓上半部堆塑多种饰物：有三层崇楼居中，一层两侧各有一条狗把门，楼檐之上有栖息的鸟和觅食的老鼠。崇楼两侧各立一亭阙，阙下有八位侍仆各执不同的乐器，正聚精会神地演奏乐曲。谷仓顶部堆塑五只相连的罐子，大罐居中，一鼠正从罐口爬出。四小罐分列大罐四角，周围簇拥着引颈觅食的雀鸟。谷仓的下半部为一完整的青瓷罐形，罐肩部其余部位塑贴一龟驮碑，碑上刻“永安三年时富且洋（祥）宜公卿多子孙寿命长千意（亿）万岁未见英（殃）”24字。龟之周围塑贴人物及鹿、猪、龟、鱼等动物，其间还夹杂刻划狗、鱼、龙等纹饰，另有 “飞”、“鹿”、“句”、“五种”等字样。胎体呈灰白色。平底略内凹。通体施青釉，釉面不甚匀净。'
    },
    {
        imgurl:'../static/image/jing_1.jpg',
        porname:'名称：【青釉香薰】',
        pordy:'朝代：西晋',
        porloc:'位置：上海博物馆',
        pordata:'数据：高12.1厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：此类香薰主要流行于三国吴至西晋时期，是江南地区瓷器特有的器型，以南京出土最多。焚香时，青烟从镂空中缓缓升起，营造出一种云雾缭绕的氛围。室内熏香的习俗最迟于战国时期就已出现。燃香之器名香薰，用以盛装香料，功能为熏衣服、祛除湿秽、清洁空气。在汉代，焚香的风气南方较北方更盛，且薰炉的式样变化，南方亦处于领先地位。'
    },
    {
        imgurl:'../static/image/nanbei_1.jpg',
        porname:'名称：【青釉莲花尊】',
        pordy:'朝代：南北朝',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高49.5厘米，腹径31厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：侈口，长颈，溜肩，橄榄形腹，外撇高足。颈部装饰分三段：上 段对称贴附两个飞天，中部刻饰三圈弦纹，下部贴附对称的忍冬、莲 花纹构成的图案各二组。颈肩相接处有六个桥形复系，上腹和中腹为 三层模印的覆莲以及一轮贴花菩提；下腹为一组单瓣仰莲。满施青釉泛黄，光亮晶莹。该尊将刻划、雕塑、模印、粘贴等多种技法施于一体，制作精美，气魄宏伟，代表了南北朝时期制瓷工艺的高超水平。'
    },
    {
        imgurl:'../static/image/sui_1.jpg',
        porname:'名称：【青釉贴花四系罐】',
        pordy:'朝代：隋朝',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高29.5厘米，口径9.6厘米，底径10厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：罐撇口，圆唇，束颈，长鼓腹，平底。通体施青釉，施釉不到底，露胎处呈灰白色，釉色淡青泛黄，积釉处呈青褐色，釉的玻璃质感强，釉面有细小开片。纹饰精美，器身由两道凸起的弦纹分作三部分。肩部贴塑条形系和桥形系，以及椭圆形菩提纹，腹部贴塑两排卧兽与椭圆形菩提纹，腹中下部饰一周凸起的莲瓣纹。层层装饰给人一种华丽而不繁缛的美感。纹饰以贴花为主，有浅浮雕立体感，纹饰带有佛教色彩。'
    },
    {
        imgurl:'../static/image/sui_2.jpg',
        porname:'名称：【白釉高足杯】',
        pordy:'朝代：隋朝',
        porloc:'位置：故宫博物院',
        pordata:'数据：高10.2厘米，口径5厘米，足径4.4厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：杯敛口，鼓腹，高足外撇。里外满施白釉，足边无釉，釉面开细碎片纹。这件白釉高足杯，造型新颖，釉质洁白细润，与北朝时的初期白瓷比较，已可看出是真正的白瓷了。白瓷虽然在北朝时期已经开始出现，但真正烧制成功则在隋代。与北朝相比，隋代白釉瓷器的烧制工艺技术有了长足的进步。隋代白瓷的烧造成功，为唐代白釉瓷器的发展奠定了坚实的基础。'
    },
    {
        imgurl:'../static/image/sui_3.jpg',
        porname:'名称：【淮南窑青釉划花莲瓣纹四系盘口瓶】',
        pordy:'朝代：隋朝',
        porloc:'位置：故宫博物院',
        pordata:'数据：高43厘米，口径15厘米，足径13.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：瓶盘口，长颈，溜肩，肩部置四个由双股泥条制成的竖系，鼓腹，腹以下渐敛，近底处外撇。通体施青绿色釉，釉仅及腹下部，釉下施有洁白的化妆土，釉面开有片纹。釉下纹饰为划花和印花，颈、肩部均戳印圆圈纹，肩部有两道划花纹饰，上为覆莲瓣纹，下为忍冬纹，腹部三道划花纹饰，上下均为覆莲瓣纹，中为忍冬纹，每层纹饰间均以弦纹相隔。由于考古工作者在安徽淮南窑遗址曾发现这种四系盘口瓶标本，在安徽地区隋代墓葬中也曾出土这类四系盘口瓶，由此推断，这件四系盘口瓶应为安徽淮南窑制品。'
    },
    {
        imgurl:'../static/image/sui_4.jpg',
        porname:'名称：【青釉印花带盖唾壶】',
        pordy:'朝代：唐代',
        porloc:'位置：隋朝',
        pordata:'数据：故宫博物院',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：壶盘口外撇，短颈，溜肩，半腹下垂，腹下略收，宽圈足。盖卧槽，钮如蜡扦状。通身施淡青色玻璃质透明釉，施釉不及底，近足处露灰白色胎骨。肩部暗刻三角纹边饰一周，腹印团花、树叶及忍冬纹一周。隋代青瓷继承南北朝青瓷的优良传统，釉色青绿而透明，釉面有细碎的片纹，玻璃质感极强。此唾壶造型敦厚，青釉明亮，所用印花技法为戳印，花纹简洁浅显而疏朗，具有鲜明的时代特征。'
    },
    {
        imgurl:'../static/image/tang_1.jpg',
        porname:'名称：【越窑秘色瓷八棱净瓶】',
        pordy:'朝代：唐代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高22.5厘米，口径1.7厘米，足径7.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：瓶通体呈八棱形，直口，长颈，溜肩鼓腹，腹以下渐收至底，圈足。胎体呈灰白色。釉面明亮，釉色青绿，犹如一汪湖水。瓶体凸棱部位釉色浅淡，更增加了器形的美感。此瓶在装饰上颇具匠心，瓶类多为圆形，此瓶则呈八棱形，且颈、肩相接处有三条凸棱，可谓与众不同。1987年陕西扶风法门寺唐代地宫出土了14件唐代越窑青瓷，同在地宫出土的衣物帐碑上将这些越窑瓷器明确记载为“瓷秘色”。其中一件与此件八棱瓶相同，因此这件越窑青釉八棱瓶亦应属于秘色瓷。'
    },
    {
        imgurl:'../static/image/tang_2.jpg',
        porname:'名称：【越窑青釉“大中元年”铭划花执壶】',
        pordy:'朝代：唐代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高27厘米，口径10.3厘米，底径9.9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：执壶在唐代主要流行于中晚唐时期。既可盛水作为茶瓶或汤瓶用以注汤点茶，亦可盛酒作为酒注使用。这件越窑执壶器形修长秀丽，釉色均匀润泽，肩部设双系，器身浅划花卉纹，线条流畅自如，是一件不可多得的精品。最为难得的是，壶身刻有“会昌七年改为大中元年三月十四日清明故记之耳”铭文，明确表明了此壶的制作年代，是唐代越窑执壶的标准器。'
    },
    {
        imgurl:'../static/image/tang_3.jpg',
        porname:'名称：【越窑青釉花瓣口碗】',
        pordy:'朝代：唐代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高3.6厘米，口径14.1厘米，足径6.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：碗十花瓣口，口以下渐敛，平底，里外满釉，釉色青绿，如“嫩荷涵露”、“古镜破苔”。越窑是唐、五代及北宋初期著名的瓷窑。唐代中期以后越窑产品的质量逐渐提高，有“类玉”、“类冰”及“千峰翠色”之誉。至晚唐，越窑更加兴盛，其中碗的形式很丰富，有荷叶、海棠和葵瓣形，还有仿金银器造型者。此花瓣口碗为越窑具有代表性的佳品。'
    },
    {
        imgurl:'../static/image/tang_4.jpg',
        porname:'名称：【邢窑白釉把杯】',
        pordy:'朝代：唐代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高7.6厘米，口径10.5厘米，底径6.2厘米x',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：唐代国力强盛，使用金银器成为上层风尚，同时对外交流繁盛，器物风格深受粟特、萨珊影响。就把杯而言，唐代金银器中有圆筒、八棱、罐形及圜底碗形等数种，多属粟特式样，而瓷器皆有模仿，此件筒形把杯，即与沙坡村出土素面把杯、何家村出土团花纹把杯形制接近。对高等级金银器的模仿，是唐代瓷器的突出特点，陆羽在《茶经》中曾评价邢窑“类银”，其审美与价值取向可见一斑。'
    },
    {
        imgurl:'../static/image/tang_5.jpg',
        porname:'名称：【白釉双龙耳瓶】',
        pordy:'朝代：唐代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高42.7厘米，口径10厘米，底径10.9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：瓶盘口，细长颈，溜肩，腹部丰满，至胫处渐收。颈上突起5道弦纹。口沿与肩之间有两个对称的龙形柄高耸直立，龙头探进瓶口衔住口沿。胎极白。施半截白釉。此瓶以造型的空间虚实以及轮廓线的自然和谐见长，对称的龙形柄与口、肩相连所形成的虚实对比，于浑厚质朴中洋溢出俊俏与妩媚，圆滑的曲线与折角处分明的棱角有机结合后，又于刚健挺拔中透出协调柔和的韵律美。器身施白釉，更显高贵典雅。这种瓶的形制受到了外来文化的影响，在融进本民族的文化特色后，端庄典雅的形体一展大唐盛世的神韵。双龙耳瓶是唐代流行的瓶式，除白釉外还有青釉、唐三彩等品种。'
    },
    {
        imgurl:'../static/image/tang_6.jpg',
        porname:'名称：【越窑青釉海棠式碗】',
        pordy:'朝代：唐代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高10.8厘米，口纵23.3厘米，口横32.2厘米，足径11.4厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：这件器物口沿作四棱花瓣状，俯视如一朵盛开的海棠花。圈足外撇，腹内有十六个支烧痕，是叠烧其它器物所留下。器身施青釉，釉色青中闪黄。海棠式碗为唐代新兴的造型风格，并且极为流行，在当时的金银器中也多有出现。此碗器型大而规整，为传世越窑碗类中所少见，反应了唐代越窑制瓷工艺的高度水平。从浙江慈溪上林湖唐代越窑窑址看，海棠式碗在当时有一定的烧造量，但无论出土品还是传世完整实物，类似这样的大碗均十分少见。'
    },
    {
        imgurl:'../static/image/tang_7.jpg',
        porname:'名称：【白釉军持】',
        pordy:'朝代：唐代',
        porloc:'位置：河南博物院',
        pordata:'数据：高17厘米，口径10.5厘米，底径10.3厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：在佛教的起源印度，僧侣们出行会随身携带一些象征性的物品，被称为“比丘十八物”， 这些器物多是佛教徒日常生活中所需的实用小工具，而“军持”就是这十八物中的其中一件。'
    },
    {
        imgurl:'../static/image/tang_8.jpg',
        porname:'名称：【郉窑“盈”字款白釉罐】',
        pordy:'朝代：唐代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高20.5厘米，口径9.5厘米，底径8.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：卷唇，短束颈，鼓腹，平底。内外壁施白釉，胎质坚实细腻， 胎色洁白如雪，釉质莹润。是邢窑标准的高质量产品。细沙底上刻“盈”字行书款，乃官家用器。'
    },
    {
        imgurl:'../static/image/song_1.jpg',
        porname:'名称：【白釉褐彩水波纹长颈瓶】',
        pordy:'朝代：宋代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高13.4厘米，口径2.6厘米，足径5.3厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：直口，细长颈，扁垂腹，圈足。瓶身薄施白釉，以褐彩满绘水波纹，纹饰繁复规律，线条流畅细密。水波纹在宋元吉州窑瓷器中颇为流行，一般以粗线条勾勒浪的轮廓，以细线条勾绘波纹，疏密有致的线条设计使波涛呈现出奔腾翻滚的磅礴之势。吉州窑褐彩属釉下彩，釉料以铁元素为着色剂，烧成后的褐釉浅处呈褐色，深处呈黑色，颇有国画写意之韵。'
    },
    {
        imgurl:'../static/image/song_2.jpg',
        porname:'名称：【青釉贯耳瓶】',
        pordy:'朝代：宋代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高33.3厘米，口径11.1厘米，足径12.7厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：贯耳瓶流行于宋代，此类器型也见于哥窑、官窑。南宋烧制出很多仿青铜器造型的瓷器，除贯耳瓶外，以鬲式炉、琮式瓶等器物为常见。龙泉窑瓷器釉色极为丰富，据《陶雅》记载：“宋龙泉青器，亦浓淡不一其色。故其余有浅绿色者，有淡如葡萄水者，有鱼肚色而稍泛绿光者。”或浓或淡的釉色源于配比复杂的釉料，南宋龙泉窑青瓷的制釉原料掺有紫金土，这种土为釉料带来了更多的氧化铁，氧化铁在还原焰中呈青色。随紫金土含量的增加，青瓷釉色产生从粉青、梅子青到豆青的变化，成就了龙泉窑瓷器那一抹抹纷繁的青色。'
    },
    {
        imgurl:'../static/image/song_3.jpg',
        porname:'名称：【景德镇窑青白釉温碗】',
        pordy:'朝代：宋代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高23.3厘米，腹径13.0厘米，温碗高14.0厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：狮钮注子温碗颇具北宋中晚期特色，江西南城县北宋嘉祐二年（1057 年）陈氏六娘墓、江西铅山县北宋元祐元年（1086年）吴氏墓及安徽宿松县北宋元祐二年（1087年）吴正臣墓均出土与此造型相似的器物。这类注子温碗应当是成套作为酒具使用的。《东京梦华录》卷四“会仙酒楼”记载：“凡酒店中不问何人，止两人对坐饮酒，亦须用注碗一副，盘盏两副，果菜碟各五片，水菜碗三五只。”河南白沙宋墓M2的“夫妇共坐宴乐图”及河南登封黑山沟宋代壁画墓西北壁的“宴饮图”，均有同类型狮钮注子温碗的使用场景。'
    },
    {
        imgurl:'../static/image/song_4.jpg',
        porname:'名称：【钧窑玫瑰紫釉渣斗式花盆】',
        pordy:'朝代：宋代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高7.3厘米，口径18.8厘米，底径14厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：该器物内壁施天蓝色釉，外壁呈玫瑰紫色。器身以鼓钉和弦纹作装饰。下承如意式三扁足。为宫廷用器。钧窑是北宋及金代的著名瓷窑之一，有官钧和民钧之分，官钧瓷窑址在现在的河南禹县，当地因古属钧州而得名。钧窑器釉色以蛋白石光泽的蓝色为基调，具有乳浊状和不透明的感觉。在此基础上，有多种变化，主要色调是月白、天蓝和玫瑰紫。'
    },
    {
        imgurl:'../static/image/song_5.jpg',
        porname:'名称：【磁州窑白地剔划黑花玉壶春瓶】',
        pordy:'朝代：宋代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高28厘米，口径7厘米，足径7厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：撇口，细颈，下垂腹，浅圈足。通体施黑釉，瓶身剔黑缠枝牡丹 花，肩部剔卷叶纹，瓶口内壁满施黑釉。此瓶剔划花技法犀利流畅，釉黑如漆，是北宋磁州窑剔黑典型作品。'
    },
    {
        imgurl:'../static/image/song_6.jpg',
        porname:'名称：【磁州窑白地黑花开光鱼纹梅瓶】',
        pordy:'朝代：宋代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高25.8厘米，口径7厘米，足径7厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：体白地黑花纹饰，腹部两面黑彩开光线条内绘鱼纹，纹饰洒脱，绘画精致。磁州窑的白地黑花，色彩黑白分明，富丽清新，绘画需调流畅，图案新颖，造型丰富，坚固耐用，深受人们喜爱。其为元代以来的瓷业发展奠定了基础。'
    },
    {
        imgurl:'../static/image/song_7.jpg',
        porname:'名称：【汝窑天青釉圆洗】',
        pordy:'朝代：宋代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高3.3厘米，口径13厘米，足径8.9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：汝窑天青釉圆洗，宋，高3.3厘米，口径13厘米，足径8.9厘米。洗敞口，浅弧壁，圈足微外撇。通体施淡天青色釉，釉质莹润，釉面开细碎片纹。外底有三个细小如芝麻粒状的支烧钉痕，露胎处呈香灰色。外底中心镌刻一个“乙”字。器物外底所刻“乙”字，一般认为是入藏清代宫廷后所刻。精于鉴古的清代皇帝曾将宫廷收藏的古董划分等级，因此，在一些清宫旧藏器物上留下了当时镌刻的“甲”、“乙”、“丙”等标志。在故宫博物院所藏宋代汝窑瓷器上，还有镌刻“蔡”、“寿成殿皇后阁”等铭文，一般认为刻字时间较早。据推测“蔡”字可能与北宋徽宗时期权臣蔡京或其子蔡絛有关，“寿成殿皇后阁”则是宋代宫殿名。'
    },
    {
        imgurl:'../static/image/song_8.jpg',
        porname:'名称：【定窑印花云龙纹盘】',
        pordy:'朝代：宋代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高4.9厘米，口径23.2厘米，足径10.7厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：这件定窑印花云龙纹盘，圈足满釉，口沿包镶铜边。盘中印花祥云瑞气环绕，游龙蟠曲舞动，腾于云雾之中，龙鳞宛然，神韵飘逸。盘外壁有定窑瓷上常见的“泪痕”，从底部则可看到流釉的痕迹，证明它在烧造时采用了覆烧的方式。此盘是一件定窑覆烧印花工艺的代表作，工艺精绝，龙纹与北宋皇陵的石刻非常相似。像这样完整模印云龙纹的瓷盘存世量十分稀少，堪称定窑中最精美的瓷器之一。'
    },
    {
        imgurl:'../static/image/yuan_1.jpg',
        porname:'名称：【青花云龙纹玉壶春瓷瓶】',
        pordy:'朝代：元代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高29.8厘米、口径8.4厘米，底径9.9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：此瓶口部外敞平展，束颈，垂腹重心较低，颈、腹间过渡圆滑流畅，低圈足略向外撇，器型稳重。釉色莹润透明，饰青花云龙图案，笔法简洁奔放。'
    },
    {
        imgurl:'../static/image/yuan_2.jpg',
        porname:'名称：【景德镇窑釉里红转把杯】',
        pordy:'朝代：元代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高10厘米，口径7.7厘米，足径3.8厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：杯撇口，深腹，瘦底，下承以中空竹节式高足。通体施青白釉。杯身涂抹3块釉里红斑，并置一小圆系，杯底和高足以子母榫相衔接，可以自由转动而不脱开。此杯装饰斑块发色鲜艳，似晚霞般美丽，实属难得之珍品。可以任意转动的杯足更增其玩赏性。1980年，江西高安元代瓷器窖藏曾出土一件元代釉里红印花塑贴蟠螭纹高足杯，其杯足亦可转动。由此可知，转把高足杯应是元代高足杯的时代特征之一。'
    },
    {
        imgurl:'../static/image/yuan_3.jpg',
        porname:'名称：【景德镇窑卵白釉加彩云龙纹玉壶春瓶】',
        pordy:'朝代：元代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高28厘米，口径7.8厘米，足径9.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：卵白釉是指一种呈失透状的釉，色白微青，恰似鹅蛋的色泽，故名。早期器物釉中含铁量稍高，色闪微青，晚期色趋纯正，洁白润泽，实为明初永乐甜白瓷的前身。卵白釉瓷器多为元代官府机构枢密院定烧，故而又常称为枢府器。卵白釉器多见盘、碗、高足碗等小件器皿，装饰以印花为主，还常常印有“枢府”字样。这件瓶的造型是宋元景德镇窑常见的玉壶春瓶，瓶身自颈至腹分段印花卉纹、云龙纹，并加以金、蓝、褐色的彩绘且保存完好，十分珍贵罕见。'
    },
    {
        imgurl:'../static/image/yuan_4.jpg',
        porname:'名称：【景德镇窑蓝釉描金折枝花、朵云纹匜】',
        pordy:'朝代：元代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高4.5厘米，通流长17厘米，底径8.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：匜（yí 音仪）敞口，浅弧腹，平底。口一侧出槽形流，流下置一小系。胎较薄。内外施蓝釉，釉厚而不均匀。口边和外底无釉。内底描金线圈内绘金彩折枝花纹，内壁画5朵金彩祥云。该器造型模仿青铜匜，蓝釉闪烁着宝石蓝般的光泽，配以熠熠生辉的金彩，光彩夺目。这件蓝釉描金匜1964年出土于河北保定窖藏，同时出土的还有蓝釉描金小杯和盘。此匜的金色花纹丝毫无损，光艳如新，实属罕见（参见河北省博物馆：《保定市发现一批元代瓷器》，《文物》1965年第2期）。'
    },
    {
        imgurl:'../static/image/yuan_5.jpg',
        porname:'名称：【景德镇窑青花莲瓣形盘】',
        pordy:'朝代：元代',
        porloc:'位置：上海博物馆',
        pordata:'数据：高5.6厘米，口径29.6厘米，足径9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：产自景德镇窑，采用云纹、莲花瓣纹，上纹八吉祥。'
    },
    {
        imgurl:'../static/image/yuan_6.jpg',
        porname:'名称：【青花缠枝花卉凤纹梅瓶】',
        pordy:'朝代：元代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高29.5厘米，口径2.6厘米，底径10厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：器形以凤首作器盖，与颈部凤身及花尾相衔。器身上部一半绘以 展翅飞凤，一半绘以缠枝花卉，胫部绘莲瓣，内饰卷叶纹。青花发色浓艳，有黑色结晶斑。全器装饰构思巧妙，极为罕见，亦为元青花转向成熟时期作品，极为珍贵。盖后配。'
    },
    {
        imgurl:'../static/image/yuan_7.jpg',
        porname:'名称：【景德镇窑青花海水白龙纹八方梅瓶】',
        pordy:'朝代：元代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高46.1厘米，口径6.2厘米，足径13.4厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：梅瓶胎骨厚重，小口平沿，颈细短。瓶身修长，有八棱。肩饰斜格锦纹，锦纹下一周大如意云头纹，内绘凤或麒麟穿牡丹图样，瓶身中部一周绘4条白龙，衬以青花海水和火焰纹，近足处饰一周如意云头纹，内绘牡丹花叶。佛经中说曼荼罗始转于东方，末至西北，总为八方，意即佛法遍及周围各地。元朝廷崇道信佛，此器八方，又以龙纹等为饰，寓意皇帝威加天下。此器是元代瓷器中的大型酒器，胎骨细腻洁白，釉质滋润透亮，青花色泽浓艳。元代的青花瓷器造型硕大丰满，纹饰繁密，层次丰富，构图严谨，一改唐宋以来瓷器花纹布局疏简的传统，工细的描绘加上繁复的层次，形成了花团锦簇的艺术风格。器肩与近足处硕大的青花云头纹借鉴了元代丝织品披肩的图案，龙纹的出现显著增多也是这一时期瓷器装饰艺术的特点。'
    },
    {
        imgurl:'../static/image/yuan_8.jpg',
        porname:'名称：【龙泉窑青釉执壶】',
        pordy:'朝代：元代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高25厘米，口径4.5厘米，足径3厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：执壶直口，口下渐丰，垂腹，圈足微外撇。壶一侧置长流，相对一侧置曲柄。附平顶圆纽盖。口、足边露胎。通体施青釉。此执壶上瘦下丰，线条流畅，收放适度，造型优美。其釉面匀净，釉色粉青，美若天然古玉。'
    },
    {
        imgurl:'../static/image/ming_1.jpg',
        porname:'名称：【青花海水龙纹高足碗】',
        pordy:'朝代：明代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高18厘米，口径15.7厘米，足径7.8厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;侈口，深腹，平底，中空外撇高足。通体青花装饰，釉色明艳莹润。内口沿绘海水纹，内底有团龙纹，外壁绘海水龙纹，龙神态威猛，气势磅礴，海涛汹涌翻滚。外口沿下青花横书“宣德年制”楷书款。本品属佛前供器，用以盛装清水。《景德镇陶录》评价宣德瓷器为“诸料悉精，青花最贵”。该碗造型规整，使用宣德时期常见的海水龙纹装饰，富有动感，具有御瓷特征，器体较大，为传世瓷器中的上乘之作。'
    },
    {
        imgurl:'../static/image/ming_2.jpg',
        porname:'名称：【黄地青花花果纹盘】',
        pordy:'朝代：明代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高5.2厘米，口径30厘米，足径20.4厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：侈口，弧腹，圈足。米糊底。通体以黄釉为地， 绘青花折枝花果纹，花果包括石榴花、莲花、瑞桃、 柿子、樱桃和荔枝，寓意多子多福、康寿昌盛。外口 沿青花横书“大明成化年制”楷书款。黄地青花是官 窑名贵品种，创烧于宣德时期。黄地青花花果纹盘在 成化、弘治、正德时期烧制较多，成化器多署边款， 砂底；弘治、正德盘多为釉底，书双圈款；宣德二者 兼有。该盘釉彩搭配协调，素雅高贵，纹饰纤柔流 畅，画风朴拙浑厚，为明成化御瓷精品。'
    },
    {
        imgurl:'../static/image/ming_3.jpg',
        porname:'名称：【德化窑白釉瓷箫】',
        pordy:'朝代：明代',
        porloc:'位置：故宫博物院',
        pordata:'数据：长56厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：箫呈竹节式，上端有1吹口，箫身的5个音孔朝上，1个音孔朝下，下端出边，镂空钱纹装饰。通体施白釉。箫为乐器，竖吹。此德化瓷箫造型秀丽精巧，釉质莹润洁白，可吹奏出优美的旋律。制造瓷箫工艺较复杂，不仅要求形同竹箫而且要求音质纯正。据清代陆廷灿《南村随笔》记载，明代德化瓷箫“百枝中无一二合调者，合则其声凄朗，远出竹上”。由此可见明代德化瓷箫属于名贵的乐器。'
    },
    {
        imgurl:'../static/image/ming_4.jpg',
        porname:'名称：【宜兴窑天蓝釉鹅颈瓶】',
        pordy:'朝代：明代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高24.5厘米，口径2.4厘米，足径7.6厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：壶呈曲颈鸠首式，肩颈处凸起弦纹一道，扁球腹，圈足。曲颈中部有唇边入水孔。深紫色砂泥，外罩纯净的天蓝釉，釉汁匀净，光亮宜人。晚明时期宜兴窑开创紫砂挂釉器，明人谷应泰《博物要览》载：“近年新烧，皆宜兴砂土为骨，釉水微似，制有佳者，但不耐用。”明代宜钧也称欧窑，《陶说》记载：“明时江南常州府宜兴欧姓者造瓷器，曰欧窑。”这件天蓝釉鸠首壶造型优雅，釉色纯正，代表了明代宜钧制作的最高水平，除清宫旧藏以外，未见有其他传世品。'
    },
    {
        imgurl:'../static/image/ming_5.jpg',
        porname:'名称：【青釉剔刻花卉纹壮罐】',
        pordy:'朝代：明代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高23.7厘米，口径12.7厘米，足径10.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：整体呈灯笼形，因口足相若，显得粗壮，故称“壮罐”。满施青釉，釉色青翠莹润。外壁采用减地剔刻工艺，颈、足部饰宝相花纹，上下腹饰缠枝莲纹，中间为折枝花纹。据清代文献记载，壮罐用于承装计算用的“逪”。器型源自伊斯兰文化地区的金银器，为永乐朝初创，在明清时期颇为流行。明代龙泉窑与皇室关系密切，据《大明会典》载，自洪武至天顺时期，龙泉窑和景德镇御窑厂共同承担贡御任务。该器造型灵秀，纹饰清丽，是永乐龙泉窑代表性作品。'
    },
    {
        imgurl:'../static/image/ming_6.jpg',
        porname:'名称：【宜兴窑塑贴莲花纹梅瓶】',
        pordy:'朝代：明代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高28.1厘米，口径4.9厘米，底径14.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：瓶小盘口，短颈，溜肩，鼓腹，腹下收敛，近足处外撇，平底内凹。通体施月白色釉，釉质细腻而光润，釉面开细碎片纹。腹部凸起莲花纹。无款识。'
    },
    {
        imgurl:'../static/image/ming_7.jpg',
        porname:'名称：【青花龙凤纹三足炉】',
        pordy:'朝代：明代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高37.5厘米，口径27.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：炉呈鼎式，盘口，短束颈，鼓腹。两侧附对称朝天耳，底承三兽蹄形足。釉色灰褐，积釉处泛黑点。外壁主体纹饰为龙凤纹，苍龙遒劲，飞凤轻盈，周围祥云萦绕，寓意吉祥幸福。龙凤呈祥图案为明清官窑典型纹样之一。自明洪武二年（1369年）起，景德镇设立御窑厂，专门烧造宫廷用瓷。本品器体硕大，造型端庄，纹饰生动，尽展明洪武景德镇窑瓷器古朴粗犷、气势雄浑的时代风格。洪武瓷炉器型罕见，弥足珍贵。'
    },
    {
        imgurl:'../static/image/ming_8.jpg',
        porname:'名称：【釉里红缠枝菊纹玉壶春瓶】',
        pordy:'朝代：明代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高32.1厘米，口径8.3厘米，足径11.9厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：侈口，长颈，垂圆腹，圈足。主体纹饰为缠枝菊纹，笔画流畅生动。釉里红是元代景德镇窑创烧的品种，也称铜红釉，早期成品率很低。至洪武时期，釉里红烧造技艺提升，发色逐渐艳丽。玉壶春瓶历史可追溯至汉唐时期，至宋代定型并流行开来，时为酒具。明清玉壶春瓶更多作陈设之用。本品造型与1960 年江苏南京中华门外郎家山宋晟墓出土的明洪武玉壶春瓶相近，釉里红呈红褐色，纹饰布局严谨，堪称明洪武景德镇窑釉里红瓷器中的佳作。'
    },
    {
        imgurl:'../static/image/qing_1.jpg',
        porname:'名称：【仿石釉堆贴螭龙纹瓶】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高20.5厘米，口径9.5厘米，底径8.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：	直口，长颈，圆鼓腹，圈足。颈肩部堆贴一螭龙，器通体施仿石 釉，底足施酱釉。外底青花书“大清乾隆年制”六字三行篆书款。清代乾隆时期盛行以瓷釉仿各种手工艺品，仿石釉用色泽相似于各色石质的彩釉，勾画出石头的纹理，色泽模仿逼真。'
    },
    {
        imgurl:'../static/image/qing_2.jpg',
        porname:'名称：【窑变釉绶带耳尊】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高32.1厘米，口径10.5厘米，底径11.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：唇口微撇，粗颈，溜肩，鼓腹，圈足外撇。尊颈部两侧堆贴绶带耳，通体施窑变釉， 足内施酱褐釉，上阴刻“雍正年制”四字二行篆书款。明清景德镇官窑有窑变釉品种，清代雍正、乾隆二朝仿烧最好，釉色以红为主， 还有天蓝、月白、绿及褐等色，交融流淌，绚丽多姿。该器造型仿自商周青铜器尊的形制，仿烧宋代钧釉，釉色以红为主，釉色艳丽，垂流似霞若焰，俗称为“火焰红”， 犹如火焰般万紫千红。其造型古朴典雅，工艺高超绝伦，釉色美艳无比，为巧夺天工之作。'
    },
    {
        imgurl:'../static/image/qing_3.jpg',
        porname:'名称：【仿文竹釉开光题诗福纹螭耳壁瓶】',
        pordy:'朝代：清代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高46.1厘米，口径13.2厘米，足径14.4厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：壁瓶长方口，长颈，长方腹，长方圈足。颈部对称置螭耳。壁瓶内施松石绿釉，外壁通体施仿文竹黄釉，正面以黄地粉彩为饰。口沿至颈部依次绘圆珠纹、如意纹，“卐”字花瓣纹，蕉叶纹，波涛文和如意云头纹。腹部绘变形蝠纹，中间饰一长方形开光，内白釉墨彩书乾隆御题诗《咏挂瓶》：“大邑冰瓷巧就模，撷芳随处贮琼敷。邮程水陆延群玉，风月三千护蕊珠。不是文殊命童子，定为长吉背奚奴。一尘弗染诸缘静，岂识寻常有菀枯。”诗后署“乾隆御制”，钤“乾”、“隆”两方红彩印章。足内施黄釉，红彩署“大清乾隆年制”六字篆书横款。据档案记载，乾隆二十三年八月乾隆皇帝秋狝木兰围场，此诗作于赴木兰围场途中。'
    },
    {
        imgurl:'../static/image/qing_4.jpg',
        porname:'名称：【珐琅彩缠枝花卉纹蒜头瓶】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高18.6厘米，口径2.8厘米，足径5.3厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：蒜头形口，长颈，硕腹，圈足。通体以凤尾纹为地，以珐琅彩加金彩绘各式缠枝花卉，有红、黄、蓝、白等色，色彩斑斓绚丽。外底松石绿釉，上蓝料双方框内书“乾隆年制”四字篆书款。此件珐琅彩瓶纹样完全为仿欧洲罗可可风格的西洋卷草花，花叶翻转卷曲，多方连续法组合，形成规矩严谨、繁琐堆砌的图案。此器原为清宫旧藏。'
    },
    {
        imgurl:'../static/image/qing_5.jpg',
        porname:'名称：【祭蓝地描金粉彩开光山水图象耳壁瓶】',
        pordy:'朝代：清代',
        porloc:'位置：故宫博物院',
        pordata:'数据：高40.5厘米，口径9.5厘米，底径8.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：瓶撇口，长颈，长圆腹，圈足外撇。颈对称置红彩描金象耳。瓶内施松石绿釉。外壁以祭蓝釉为地，描金彩绘如意云头纹、缠枝花纹、团寿纹、蝙蝠纹和回纹。腹部前后两组长方形开光，内白地粉彩绘山水楼阁图。足内施松石绿釉。足内中间留白署红彩“大清乾隆年制”六字篆书款。'
    },
    {
        imgurl:'../static/image/qing_6.jpg',
        porname:'名称：【黄地青花跃龙捧寿纹双耳六方瓶】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高57.1厘米，口径12.5厘米，足径13.5厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：器呈六方形，撇口，颈饰螭龙耳一双，敛腹，圈足外撇。口沿、肩及足墙饰回纹，颈饰如意、莲纹，近足饰蝉纹、螭龙纹和连珠纹。此瓶通体黄釉底青花绘六条五爪腾龙捧“寿”，富丽堂皇，气势非凡。为乾隆官窑罕见制品。底书青花“大清乾隆年制”六字篆书款。'
    },
    {
        imgurl:'../static/image/qing_7.jpg',
        porname:'名称：【仿木纹釉带座花盆】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：高36.5厘米，口径29.5厘米，底径25.2厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：器由花盆与座托组成。似多块木板拼接而成的花盆，外施木纹釉，并饰有两道凸起的金箍。外底施白釉，青花书“大清乾隆年制”六字三行篆书款。底座为仿木质器座， 通体施黑釉，上金彩绘卷草纹、折枝花卉纹等。以红褐色、褐色两种彩釉绘制的木纹釉瓷，始烧于雍正时期，乾隆朝尤为流行，造型丰富多样。其造型、色泽、质感均与木制器皿酷似，木质纹理清晰，瓷木难辨。邵蛰民在《增补古今瓷器源流考》记载道：“清瓷彩色至乾隆而极，其彩釉之仿他物者亦以乾隆为最多最精。如仿木纹以烧桶，腰有牙箍或铜箍，皆与真木桶无异。”花盆与底座相配， 既增加了整体美感，也给人以稳重敦厚之感，集装饰性与欣赏性于一体。'
    },
    {
        imgurl:'../static/image/qing_8.jpg',
        porname:'名称：【仿雕漆描金双龙戏珠纹冠架】',
        pordy:'朝代：清代',
        porloc:'位置：中国国家博物馆',
        pordata:'数据：通高27.9厘米，径15.8厘米',
        porinfo:'&nbsp;&nbsp;&nbsp;&nbsp;详情：冠架即帽托，由冠伞、柱、底座组成。冠伞为球形，其下有托， 柱为葫芦形，底座呈海棠式。仿雕漆制品，辅以金彩装饰，冠伞刻饰云雷地双龙戏珠纹、云蝠纹。外底施矾红釉，上金彩书“大清嘉庆年制”六字三行篆书款，环以四朵小花为饰。此器刻工刀法娴熟，纹饰精美， 与雕漆无二， 有乾隆时期工艺的遗风， 为嘉庆官窑中的精品。'
    }
]