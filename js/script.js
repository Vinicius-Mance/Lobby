//função fruncipal
//container -> container pai
//onUpdate -> parâmetro usado para invocar inumeras funções sequencialmente
function sortable(container, onUpdate){
      var dragElement, nextElement;

      [...container.children].map(item => {
        item.draggable = true
        let pos = document.getElementById(item.id).getBoundingClientRect();
        return pos;
      });

      function onDragOver(event){

          event.preventDefault();

          event.dataTransfer.dropEffect = 'move';

          var target = event.target;

          if(target && target !== dragElement && target.nodeName == 'A' ){



            var targetPos = target.getBoundingClientRect();

            let next;

            if ( (event.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > .5
              || (event.clientX - targetPos.left) / (targetPos.right - targetPos.left) > .5) {
                next = true;
            } else {
                next = false;
            }

              container.insertBefore(dragElement, next && target.nextSibling || target);

          }
      }

      function onDragEnd(evt){
          evt.preventDefault();
          [...container.children].map(child => {
               let pos = document.getElementById(child.id).getBoundingClientRect();
               return pos;
             });
          container.removeEventListener('dragover', onDragOver, false);
          container.removeEventListener('dragend', onDragEnd, false);

          nextElement !== dragElement.nextSibling ? onUpdate(dragElement) : false;
      }

        container.addEventListener('dragstart', function(e){
          dragElement = e.target;
          nextElement = dragElement.nextSibling;

          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('Text', dragElement.textContent);

          container.addEventListener('dragover', onDragOver, false);
          container.addEventListener('dragend', onDragEnd, false);

      });
  }

  sortable( document.querySelector("main"), function (item){});
