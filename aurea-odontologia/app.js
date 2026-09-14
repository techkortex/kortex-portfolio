const booking=document.querySelector('#booking'),detail=document.querySelector('#detail'),interest=document.querySelector('#interest'),status=document.querySelector('#status');
const menu=document.querySelector('.menu-toggle'),navigation=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open')}
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
function updateMessage(){document.querySelector('#message').textContent=`Olá, Áurea! Gostaria de conversar sobre ${interest.value.toLocaleLowerCase('pt-BR')} e conhecer os próximos passos.`;status.textContent='';document.querySelector('#simulate').disabled=false}
function openBooking(topic){closeMenu();if(topic)interest.value=topic;updateMessage();booking.showModal();document.body.classList.add('modal-open')}
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>openBooking('Primeira consulta')));
interest.addEventListener('change',updateMessage);
document.querySelector('#simulate').addEventListener('click',()=>{status.textContent='Simulação concluída. Em um site real, este passo abriria o WhatsApp da clínica. Nenhuma mensagem foi enviada.'});
const descriptions={'Implantes':'Uma conversa sobre a reposição de dentes, suas expectativas e as etapas que podem fazer parte de um planejamento individual.','Ortodontia':'Um espaço para conhecer possibilidades de alinhamento dos dentes e conversar sobre opções que façam sentido para a sua rotina.','Cuidado integral':'Atenção à saúde bucal no dia a dia, com espaço para prevenção, acompanhamento e suas dúvidas.'};
let selected='';document.querySelectorAll('[data-treatment]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.treatment;document.querySelector('#detail-title').textContent=selected;document.querySelector('#detail-copy').textContent=descriptions[selected];detail.showModal();document.body.classList.add('modal-open')}));
document.querySelector('#detail-book').addEventListener('click',()=>{detail.close();openBooking(selected)});
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open')});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
