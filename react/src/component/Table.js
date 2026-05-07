import React from 'react'

const Table = ({submitted,handleDelete,handleEdit}) => {
  return (
    <>
        <h2 className='text-center p-7'>Form Output</h2>
         {submitted.length > 0 && (
          <table border="1" className='table-auto border-separate border-border-slate-500 itemscenter outline mx-auto'>
            <thead>
              <tr>
                <th className='border border-slate-300 px-5'>Name</th>
                <th className='border border-slate-300 px-5'>Age</th>
                <th className='border border-slate-300 px-5'>Email</th>
              </tr>
            </thead>
            <tbody>
              {submitted.map((item, index) => (
                <tr key={index}>
                  <td className='border border-slate-300 px-5'>{item.name}</td>
                  <td className='border border-slate-300 px-5'>{item.age}</td>
                  <td className='border border-slate-300 px-5'>{item.email}</td>
                   <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </>
  )
}

export default Table
