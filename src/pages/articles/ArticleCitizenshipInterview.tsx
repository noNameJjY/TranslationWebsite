import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ArticleCitizenshipInterview: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <article className="article-content">
        <h1>USCIS 庇护面谈 | 被判定“不诚实”的判定标准 - 原帖在小红书</h1>
        <div className="article-meta">
          <p>发布日期: 2025-06-24</p>
        </div>
        <div className="article-body">
          {`
作为翻译，遇到过很多次移民官对真实性的质疑

有些移民官对时间和日期特别”敏感”
或者说日期这种确定的数字更方便他们给你打上“不诚实”的标签
而且特别愿意问一些挖坑问题

我有看到类似 ‘你出院时是早上吗？’ ， 或者‘你最后一次收到 shang hai 是什么时候‘这种问题
对于 ‘你出院时是早上吗？’ ， 客人没有在自述里写明是什么时候，但是提交的出院证据又有时间戳
如果时间戳是下午，客人回答上午，那移民官立刻两眼放光，感觉是抓出你‘不诚实’的证据了
问题是，国内出院单是有滞后性的，特别是十几年前的时候, 出院再补的可能性都是有的
甚至我自己都碰到周六出院后周一才领到出院单的事，因为周末没人开单子
那客人就给移民官一通解释
问题是ta 根本不信，抓着这点不放，就是认定你在撒谎
那碰到这样的事就很难办了

最好当然是能在面谈前发现这个时间戳, 在面谈时指出来，例如
‘我不记得是什么时候出院了，但是在我提价的证据里有时间戳。 我估计是这个时间之前出院的，因为我后来才拿到这张出院表。’
先发制人可以有效地堵住面谈官的👄

我之前在reddit 上刷到说有USCIS 的移民官下班要靠喝 8 + 1 麻木自己才能应对上班时听到的‘bs 故事‘
ta 的主张是： 绝大多数的申请人的故事都是假的 （bh 也好， 婚绿也好），自己 over works 并且 under paid
说句在 xhs 上要被喷的话
那么不喜欢自己的工作那就换一份呀，何必蹉跎十多年在自己不喜欢的工作上呢 （po 文里我记得是10+年了）


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

export default ArticleCitizenshipInterview;
