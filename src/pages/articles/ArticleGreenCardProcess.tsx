import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ARTICLE_ID = 'green-card-process';

const ArticleGreenCardProcess: React.FC = () => {
  useEffect(() => {
    // Any necessary side effects can be added here
  }, []);

  return (
    <div className="article-detail-page">
      <Header />
      <main>
        <article className="article-content">
          <h1>聊聊USCIS 婚姻面谈 - 原帖在小红书</h1>
          <div className="article-body">
            {`
每次客人问我婚姻面谈会被问到什么问题，大概多久
我自己的经验来说真是非常因人而异！
这里的“人”首先指面谈官的不同
有的面谈官问得超级详细，你准备的退税表，一起出游的照片都会看，那就要多花点时间
细节方面也会问很多
如果碰到这样的面谈官放平心态就好
ta 可能就是比较仔细的人，不是在怀疑你啦

其次是自己情况的不同
比如过有些客人在 army，即使有些小瑕疵，也不会被刁难
有些客人表格上写了自己不和配偶住在一起，那在这方面会问一下
有些couple 各有几段婚史，那面谈官有可能会多跟你聊这个方面
这倒不是说你表格真的填的有问题，或者你的案子有问题
很多问题都是可以解释的，比如不住在一起是因为工作原因，3个月后计划一起住 之类的
有合理的解释就好
有的时候我的客人在为自己做出解释的时候面谈官也会频频点头
也就是说面谈官也大概猜得到你的解释，但是想听你现场说一遍

所以不用太担心，做好前期准备, 会一切顺利的！

如果你即将面谈，担心翻译质量, 或者想为面谈准备，欢迎找我咨询！
`.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="article-navigation">
            <Link to="/articles" className="back-button">返回文章列表</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleGreenCardProcess;
