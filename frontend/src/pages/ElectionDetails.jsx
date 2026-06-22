import { IoMdAddCircleOutline } from 'react-icons/io';
import ElectionCandidate from '../components/ElectionCandidate';
import { elections as dummyElections } from '../data/data';
import { candidates as dummyCandidates } from '../data/data';
import { voters as dummyVoters } from '../data/data';
import '../styles/electionDetails.css';
import { IoAddOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/uiSlice';
import { useParams } from 'react-router';
import AddCandidateModal from '../components/AddCandidateModal';
import { useSelector } from 'react-redux';

const ElectionDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const currentElection = dummyElections.find(
        (election) => election.id === Number(id),
    );

    if (!currentElection) {
        return <section className='electionDetails'>Election not found.</section>;
    }

    const electionCandidates = dummyCandidates.filter(
        (candidate) => candidate.electionId === Number(id),
    );

    const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing);

    // Open modal to add candidate
    const openModal = () => {
        dispatch(UiActions.openAddCandidateModal());
    }

    return (
        <>
        <section className='electionDetails'>
            <div className='container electionDetails__container'>
                <h2>{currentElection.title}</h2>
                <p>{currentElection.description}</p>
                <div className='electionDetails__image'>
                    <img
                        src={currentElection.thumbnail}
                        alt={currentElection.title}
                    />
                </div>

                <menu className='electionDetails__candidates'>
                    {electionCandidates.map((candidate) => (
                        <ElectionCandidate
                            key={candidate.id}
                            {...candidate}
                        />
                    ))}
                    <button className="add__candidate-btn" onClick={openModal}>
                        <IoAddOutline />
                    </button>
                </menu>

                <article className='voters'>
                    <h2>Voters</h2>
                    <table className='voters__table'>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyVoters.map((voter) => (
                                <tr key={voter.id}>
                                    <td>
                                        <h5>{voter.fullName}</h5>
                                    </td>
                                    <td>{voter.email}</td>
                                    <td>09:45</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </div>
        </section>
        {addCandidateModalShowing && <AddCandidateModal />}
        </>
    );
};

export default ElectionDetails;
