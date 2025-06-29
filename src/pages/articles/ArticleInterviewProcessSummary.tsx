import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Services.css';

const InterviewProcessSummary: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <h1>超全庇护面谈流程总结</h1>
      <p>根据我的经验给大家聊聊整个面谈大概会分成几个板块</p>
      <h2>确认你的身份</h2>
      <ul>
        <li>确保你带好护照（过期也可以）驾照，等等</li>
        <li>当场要求按指纹，拍照</li>
      </ul>
      <h2>确认 589 表格中的内容</h2>
      <ul>
        <li>准备时要从头到尾看一遍，特别是过往地址，过往工作，出国记录等等</li>
      </ul>
      <p><strong>这个很重要 &gt; </strong>我发现西雅图面谈会确认你之前签证的信息，比如 ds160 表格 （申请旅游签的表格）。这里就不一一列举了</p>
      <ul>
        <li>这个可能发生在面谈任何部分</li>
      </ul>
      <h2>接下来就是谈案子，一般1 h - 2.5 h</h2>
      <p>谈完之后会和你确认寄件地址，送你出门～</p>
      <p>很多人会问面谈有多久，我谈下来2.5h - 4h 都有，看你案件的复杂程度和一行有多少人。如果一个案子加上受益人一共两三个人，那时间很可能要长一点。</p>
    </main>
    <Footer />
  </div>
);

export default InterviewProcessSummary;
