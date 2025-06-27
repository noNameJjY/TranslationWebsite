import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ArticleCommonQuestions: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <article className="article-content">
        <h1>婚绿，庇护绿卡都必看！ 总结面谈中常见的问题及应对策略 - 原帖在小红书</h1>
        <div className="article-meta">
          <p>发布日期: 2025-06-24</p>
        </div>
        <div className="article-body">
          {`
面谈过程中会遇到各种问题，提前了解和准备可以帮助您更好地应对。

我翻译的客人在自述里的写的工作时间和签证记录（DS-160）上写的不同，结果导致移民官反复质问，甚至上升到是否撒谎的程度。

移民官：“根据你填写的DS-160，你在2010年3月开始在X公司工作，对吗？”客人：“是的，我在X公司做了五年多。”移民官：“但你的自述里写的是2010年8月才和丈夫/妻子搬到A市并开始在X公司工作。你怎么解释其中的不同？”客人：“呃……可能是记错了？时间过去太久了，我有些忘记了。”
移民官（语气严肃）：“你的签证申请表（DS-160）上是你自己填写并签字确认的，信息必须准确。我们要确保你没有提供虚假信息。你到底是什么时候开始工作的？”

看到这边 先 STOP 🛑

🌟虽然ta 的工作经历和本身的案件没有直接的关系,无论是 bh 面谈还是婚姻绿卡面试，移民官都会详细核对你提交的申请表格。
🌟比起当场回忆，提前整理好旅行史、工作史、地址史会更安心。如果面试中纠结的时间过长，难免导致移民官不耐烦。
🌟你的自述 （affidavit） 与 I-589（bh申请）、I-130/I-485（婚姻绿卡表格）上的信息一定要一致。
🌟很多时候移民官也会核对签证记录（DS-160）上内容，如和上述的文件出入，移民官可能会怀疑你的陈述是否真实。
🌟提交申请表格到真正面试时间跨度可能会很大，如果现在情况有改变，可以写成列表，在面谈时告知移民官。
🌟如果真的遇到这种情况，并且记不得准确的日期（吐槽一下十年前的东西谁记得住啊喂），可以向移民官提出自己记不得了。 比如“我记得是2010 入职，但是具体月份过太久记不清了。” 切记不要乱答

📌 重点整理的三大历史记录
📍 Location History | 地址记录
💼 Work History | 工作记录
✈️ Travel History | 旅行记录
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

export default ArticleCommonQuestions;
