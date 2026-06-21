import { useState, useEffect } from 'react';
import { getProblems } from '../lib/problems';
import type { Problem } from '../types/index';


export default function CalendarPage() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        async function fetchProblems() {
            const data = await getProblems();
            setProblems(data ?? [])
        }
        fetchProblems();
    }, [])

    return <div>Problems: {problems.length} </div>
}