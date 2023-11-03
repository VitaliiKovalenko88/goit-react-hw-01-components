

const Statistics = ({title, stats} ) =>{
  
return (
<section class="statistics">
{title?<h2 class="title">{title}</h2>:null}

<ul class="stat-list">
  <li class="item">
    <span class="label">.docx</span>
    <span class="percentage">4%</span>
  </li>
</ul>
</section>)
};


export default Statistics;