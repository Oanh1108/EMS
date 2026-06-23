import { format } from "date-fns"
import { Download } from "lucide-react"

const PayslipList = ({payslips, isAdmin}) => {
  return (
    <div className='card overflow-hidden'>
            <div className='overflow-x-auto'>
                <table className='table-modern'>
                    <thead>
                        <tr>
                           {isAdmin && <th>Employee</th>}
                           <th>Period</th>
                           <th>Basic Salary</th>
                           <th>Net Salary</th>
                           <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payslips.length === 0 ? (
                            <tr>
                                <td colSpan={isAdmin ? 5 : 4} className='text-center py-12 text-slate-400'>
                                    No payslips found
                                </td>
                            </tr>
                        ): (
                            payslips.map((payslips) => {
                                return (
                                    <tr key={payslips._id || payslips.id}>
                                        {isAdmin && (
                                            <td className='text-slate-900'>
                                            {payslips.employee?.firstName} {payslips.employee?.lastName}
                                        </td>
                                        )}
                                   
                                        <td className="text-slate-500">
                                            {format(new Date(payslips.year, payslips.month - 1), "MMMM yyyy")} 
                                            
                                        </td>
    
                                        <td className=' text-slate-500'>
                                            ${payslips.basicSalary?.toLocaleString()}
                                        </td>

                                        <td className=' font-medium text-slate-800'>
                                            ${payslips.netSalary?.toLocaleString()}
                                        </td>
    
                                        <td className='text-center'>
                                            <button
                                                onClick={() => window.open(`/print/payslips/${payslips._id || payslips.id}`)}
                                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded 
                                                text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors ring-1 ring-blue-600/10"
                                            >
                                                <Download className="w-3 h-3 mr-1.5"/> Download
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default PayslipList