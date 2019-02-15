import React, { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest/';
import { FETCHING, SUCCESS, ERROR } from '../hooks/useApiRequest/actionTypes';

export const ApiRequest = () => {
    const [userId, setUserId] = useState(1);
    const [{ status, response, exception }, makeRequest] = useApiRequest(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
            verb: 'get',
        }
    );

    return (
        <div className="api-request">
            <div className="api-request__info">
                {
                    'Enter a user id and click the "Get User!" button. Greater than 10 will produce an error.'
                }
            </div>
            <input
                className="api-request__user-id-input"
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
            <button
                className="api-request__request-button"
                onClick={makeRequest}
            >
                Get User!
            </button>
            {status === FETCHING && (
                <div className="api-request__fetching">Fetching...</div>
            )}
            {status === SUCCESS && (
                <div className="api-request__user-info-container">
                    <div className="api-request__user-name">
                        {response.data.name}
                    </div>
                    <div className="api-request__user-email">
                        {response.data.email}
                    </div>
                    <div className="api-request__user-phone">
                        {response.data.phone}
                    </div>
                </div>
            )}
            {status === ERROR && (
                <div className="api-request__error-container">
                    <div className="api-request__error-exception">
                        {JSON.stringify(exception)}
                    </div>
                    <br />
                    <div className="api-request__error-response">
                        {JSON.stringify(response)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApiRequest;
