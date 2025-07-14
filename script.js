<style>
  .grid { display: flex; gap: 20px; }
  .semestre { flex: 1; }
  .card {
    width: 150px; height: 80px;
    perspective: 1000px;
    margin-bottom: 15px;
  }
  .inner {
    position: relative;
    width: 100%; height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .card:hover .inner,
  .card.show .inner {
    transform: rotateY(180deg);
  }
  .face {
    position: absolute; backface-visibility: hidden;
    display: flex; align-items: center;
    justify-content: center;
    border: 1px solid #ccc; border-radius: 8px;
    padding: 5px;
  }
  .front { background: #59a0ff; color: white; }
  .back { background: #f5f5f5; color: #333; transform: rotateY(180deg); font-size: 0.9em; }
</style>
<div class="grid">
  <div class="semestre">
    <h3>1° Sem.</h3>
    <div class="card" onclick="this.classList.toggle('show')">
      <div class="inner">
        <div class="face front">Biología Celular</div>
        <div class="face back">Prerrequisito: —</div>
      </div>
    </div>
    <!-- ... más ramos ... -->
  </div>
  <!-- ... más semestres ... -->
</div>
