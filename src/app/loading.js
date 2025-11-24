// app/dashboard/loading.js
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <CircularProgress />
        </div>
    );
}
