// import { forwardRef, useImperativeHandle, useRef } from "react";

// const ResultModal = forwardRef (function ResultModal({ result, targetTime}, ref) {
//     const dialog = useRef();

//     useImperativeHandle(ref, () =>{
//         return{
//             open() {
//                 dialog.current.showModal();
//             }
//         }
//     })
//     return (<dialog ref={dialog} className="result-modal" open>
//         <h2>You {result}</h2>
//         <p>The target time was <strong>{targetTime} seconds.</strong></p>
//         <p>You Stopped the timer with <strong>X seconds left.</strong></p>
//         <form method="dialog">
//             <button>Close</button>
//         </form>
//     </dialog>
// );
// })
// export default ResultModal;
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef(null);

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        },
    }));

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong>.</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
