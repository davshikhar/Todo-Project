import { useState } from "react";
import type { Todo } from "../App";

export const User = () => {

    const [todo, setTodo] = useState<Todo[]>([]);
    const [title, setTitle] = useState<string>('');
    const [priority, setPriority] = useState<string>('');
    const [dark, setDark] = useState<boolean>(false);

    function addTodo() {
        if (title !== null && priority !== null) {
            const newTodo = { title: title, priority: priority };
            setTodo([...todo, newTodo]);
        }
        else {
            alert("enter title and priority");
        }
    }


    return (
        <div className='m-8 grid gap-4 pt-2'>

            <div className='bg-[#625E5E] border flex flex-col p-4 rounded-lg shadow-lg gap-4'>
                <div className='text-3xl font-bold font-mono text-center'>Add todo</div>
                <label>
                    <span className='font-mono text-lg font-semibold'>Enter the name/title:</span>
                    <br />
                    <input type="text" placeholder='Enter the name/title' className='border rounded-md bg-gray-200 w-full mt-1 p-1' onChange={(e) => setTitle(e.target.value)}></input>
                </label>
                <label>
                    <span className='font-mono text-lg font-semibold'>Priority:</span>
                    <br />
                    <form>
                        <label><input type="radio" name="select" value="High" className='border rounded-lg p-1' checked={priority === "High"} onChange={(e) => setPriority(e.target.value)} /><span className='m-2 text-md font-normal'>High</span></label><br />
                        <label><input type="radio" name="select" value="Medium" className='border rounded-lg p-1' checked={priority === "Medium"} onChange={(e) => setPriority(e.target.value)} /><span className='m-2 text-md font-normal'>Medium</span></label><br />
                        <label><input type="radio" name="select" value="Low" className='border rounded-lg p-1' checked={priority === "Low"} onChange={(e) => setPriority(e.target.value)} /><span className='m-2 text-md font-normal'>Low</span></label>
                    </form>
                </label>
                <div className='flex justify-center'><button className='font-semibold bg-blue-400 border rounded-lg px-8 py-2 cursor-pointer hover:bg-blue-600 me-2 mb-2' onClick={addTodo}>Add</button></div>
            </div>
            {/* color:-bg-[#69D1C5] */}
            <div className='bg-[#625E5E] border rounded-lg shadow-lg p-4'>
                <div className='text-3xl font-bold font-mono text-center'>Todo's displayed here!</div>
                <div className='grid grid-cols-3 m-4 gap-4 text-center'>
                    <div>
                        <div className='text-lg font-bold font-mono text-center border rounded'>
                            High
                        </div>
                        <div>
                            {todo.filter(item => item.priority === "High").map((c) => (
                                <div className='border rounded-lg m-3'>
                                    <div className='border rounded-lg bg-blue-500 m-1'>
                                        {c.title}
                                    </div>
                                    <label className='cursor-pointer'><input type="checkbox" value="High" className='border rounded-lg p-1' /><span className='m-2 text-md font-normal'>Completed</span></label><br />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='text-lg font-bold font-mono text-center border rounded'>Medium</div>
                        <div>
                            {todo.filter(item => item.priority === "Medium").map((c) => (
                                <div className='border rounded-lg m-2'>
                                    <div className='border rounded-lg bg-blue-500 m-1'>
                                        {c.title}
                                    </div>
                                    <label className='cursor-pointer'><input type="checkbox" value="Medium" className='border rounded-lg p-1' /><span className='m-2 text-md font-normal'>Completed</span></label><br />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='text-lg font-bold font-mono text-center border rounded'>Low</div>
                        <div>
                            {todo.filter(item => item.priority === "Low").map((c) => (
                                <div className='border rounded-lg m-2'>
                                    <div className='border rounded-lg bg-blue-500 m-1'>
                                        {c.title}
                                    </div>
                                    <label className='cursor-pointer'><input type="checkbox" value="Low" className='border rounded-lg p-1' /><span className='m-2 text-md font-normal'>Completed</span></label><br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}